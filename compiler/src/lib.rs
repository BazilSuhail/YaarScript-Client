use wasm_bindgen::prelude::*;
use crate::lexer::lexer::Lexer;
use crate::core::token::TokenType;
use crate::parser::parser::Parser; 
use crate::semantics::scope::ScopeAnalyzer;
use crate::semantics::type_checker::TypeChecker;
use crate::ir_pipeline::tac::TACGenerator;
use crate::ir_pipeline::tac_optimizer::IROptimizer;
use crate::codegen::execution::ExecutionEngine;
use crate::error::ErrorReporter;

pub mod error;

pub mod lexer {
    pub mod lexer; 
}

pub mod core {
    pub mod ast;
    pub mod token;
}

pub mod parser {
    pub mod parser; 
}

pub mod semantics {
    pub mod scope;
    pub mod type_checker;
}

pub mod ir_pipeline {
    pub mod tac;
    pub mod tac_optimizer;
}

pub mod codegen {
    pub mod execution;
}

#[wasm_bindgen]
pub fn compile_and_run(source: String) -> String {
    let mut final_output = String::new();
    let reporter = ErrorReporter::new(&source);
    
    // --- Lexical Analysis ---
    let mut lexer = Lexer::new(source.clone());
    let tokens = lexer.tokenize();

    let has_lex_errors = tokens.iter().any(|t| t.token_type == TokenType::Error);
    if has_lex_errors {
        for token in &tokens {
            if token.token_type == TokenType::Error {
                final_output.push_str(&reporter.report_lexical(&token.value, token.line, token.column));
            }
        }
        return final_output;
    }

    // --- Syntax Analysis ---
    let mut parser = Parser::new(tokens);
    let ast = match parser.parse_program() {
        Ok(ast) => ast,
        Err(err) => {
            return reporter.report_syntax(&err.message, err.token.line, err.token.column);
        }
    };

    // --- Scope Analysis ---
    let mut scope_analyzer = ScopeAnalyzer::new();
    if let Err(errors) = scope_analyzer.analyze(&ast) {
        for error in &errors {
            final_output.push_str(&reporter.report_scope(&error.message, error.line, error.column));
        }
        return final_output;
    }

    // --- Type Analysis ---
    let mut type_checker = TypeChecker::new(scope_analyzer.get_global_scope());
    if let Err(errors) = type_checker.check(&ast) {
        for error in &errors {
            final_output.push_str(&reporter.report_type(&error.message, error.line, error.column));
        }
        return final_output;
    }

    // --- IR Generation ---
    let mut tac_gen = TACGenerator::new();
    let raw_tac = tac_gen.generate(&ast);

    // --- IR Optimization ---
    let mut optimizer = IROptimizer::new(raw_tac);
    optimizer.run();
    let optimized_tac = optimizer.get_instructions();

    // --- Execution ---
    let engine = ExecutionEngine::new(optimized_tac);
    match engine.execute() {
        Ok(output) => output,
        Err(e) => format!("Runtime Error: {}", e),
    }
}
