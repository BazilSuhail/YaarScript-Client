// main.rs - using lib.rs for module organization
use compiler::lexer::lexer::Lexer;
use compiler::core::token::TokenType;
use compiler::parser::parser::Parser; 
use compiler::semantics::scope::ScopeAnalyzer;
use compiler::semantics::type_checker::TypeChecker;
use compiler::ir_pipeline::tac::TACGenerator;
use compiler::ir_pipeline::tac_optimizer::IROptimizer;
use compiler::codegen::execution::ExecutionEngine;
use compiler::error::ErrorReporter;

use std::fs;

fn main() {
    let source = fs::read_to_string("test_input.txt") 
        .expect("failed to read test_input.txt");
    
    let reporter = ErrorReporter::new(&source);
    
    // --- Lexical Analysis ---
    let mut lexer = Lexer::new(source.clone());
    let tokens = lexer.tokenize();

    let has_lex_errors = tokens.iter().any(|t| t.token_type == TokenType::Error);
    if has_lex_errors {
        for token in &tokens {
            if token.token_type == TokenType::Error {
                let report = reporter.report_lexical(&token.value, token.line, token.column);
                println!("{}", report);
            }
        }
        return;
    }

    // --- Syntax Analysis ---
    let mut parser = Parser::new(tokens);
    let ast = match parser.parse_program() {
        Ok(ast) => {
            println!("✅ Parsing completed successfully!");
            ast
        }
        Err(err) => {
            let report = reporter.report_syntax(&err.message, err.token.line, err.token.column);
            println!("{}", report);
            return;
        }
    };

    // --- Scope Analysis ---
    let mut scope_analyzer = ScopeAnalyzer::new();
    if let Err(errors) = scope_analyzer.analyze(&ast) {
        for error in &errors {
            let report = reporter.report_scope(&error.message, error.line, error.column);
            println!("{}", report);
        }
        eprintln!("Scope analysis failed with \x1b[1;31m{} error(s)\x1b[0m", errors.len());
        return;
    }
    println!("✅ Scope analysis completed successfully!");

    // --- Type Analysis ---
    let mut type_checker = TypeChecker::new(scope_analyzer.get_global_scope());
    if let Err(errors) = type_checker.check(&ast) {
        for error in &errors {
            let report = reporter.report_type(&error.message, error.line, error.column);
            println!("{}", report);
        }
        eprintln!("Type checking failed with \x1b[1;31m{} error(s)\x1b[0m", errors.len());
        return;
    }
    println!("✅ Type checking completed successfully!");
    println!("No semantic errors found.");

    // --- IR Generation ---
    let mut tac_gen = TACGenerator::new();
    let raw_tac = tac_gen.generate(&ast);
    println!("✅ Raw TAC generated");

    // --- IR Optimization ---
    let mut optimizer = IROptimizer::new(raw_tac);
    optimizer.run();
    let optimized_tac = optimizer.get_instructions();
    println!("✅ Optimization completed!");

    // --- Execution ---
    println!("\nExecuting Program Output:");
    let engine = ExecutionEngine::new(optimized_tac);
    match engine.execute() {
        Ok(output) => {
            println!("{}", output);
            println!("✅ Execution finished.");
        }
        Err(e) => {
            eprintln!("\n❌ Execution Error: {}", e);
        }
    }
}
