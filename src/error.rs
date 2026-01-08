use std::cmp;

/// A utility to report errors in a beautiful way with source code snippets.
pub struct ErrorReporter<'a> {
    lines: Vec<&'a str>,
}

impl<'a> ErrorReporter<'a> {
    pub fn new(source: &'a str) -> Self {
        let lines = source.lines().collect();
        Self { lines }
    }

    /// Reports an error with context and captures it in the provided output vector.
    pub fn report(&self, stage: &str, message: &str, line: usize, column: usize, output: &mut Vec<String>) {
        output.push(format!("\n{} Error:", stage));
        output.push(format!("error: {}", message));
        output.push(format!("\n  --> {}:{}", line, column));

        if line == 0 || line > self.lines.len() {
            output.push("  (Source location unavailable)".to_string());
            return;
        }

        let line_idx = line - 1;
        let start_line = if line_idx > 0 { line_idx - 1 } else { line_idx };
        let end_line = cmp::min(line_idx + 1, self.lines.len() - 1);

        output.push("".to_string());

        for i in start_line..=end_line {
            let indicator = if i == line_idx { ">" } else { " " };
            let content = self.lines[i];

            if i == line_idx {
                let col_idx = column.saturating_sub(1).min(content.len());
                let left = &content[..col_idx];
                let right = &content[col_idx..];

                output.push(format!(
                    "{:>4} {} | {}{}",
                    i + 1,
                    indicator,
                    left,
                    right
                ));

                let padding = " ".repeat(7 + column - 1);
                output.push(format!("{}  ^", padding));
            } 
            else {
                output.push(format!("{:>4} {} | {}", i + 1, indicator, content));
            }
        }
        output.push("".to_string());
    }

    /// Reports a lexical error
    pub fn report_lexical(&self, message: &str, line: usize, column: usize, output: &mut Vec<String>) {
        self.report("Lexical", message, line, column, output);
    }

    /// Reports a syntax error
    pub fn report_syntax(&self, message: &str, line: usize, column: usize, output: &mut Vec<String>) {
        self.report("Syntax", message, line, column, output);
    }

    /// Reports a scope error
    pub fn report_scope(&self, message: &str, line: usize, column: usize, output: &mut Vec<String>) {
        self.report("Scope", message, line, column, output);
    }

    /// Reports a type error
    pub fn report_type(&self, message: &str, line: usize, column: usize, output: &mut Vec<String>) {
        self.report("Type", message, line, column, output);
    }
}