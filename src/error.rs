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

    /// Reports an error with context.
    /// - `stage`: The compiler stage (e.g., "Lexical", "Syntax", "Scope", "Type")
    /// - `message`: The error message
    /// - `line`: 1-based line number
    /// - `column`: 1-based column number
    pub fn report(&self, stage: &str, message: &str, line: usize, column: usize) -> String {
        let mut output = String::new();
        
        // Header
        output.push_str(&format!("\n{} Error:\n", stage));
        output.push_str(&format!("error: {}\n", message));
        output.push_str(&format!("\n  --> {}:{}\n", line, column));

        if line == 0 || line > self.lines.len() {
            output.push_str("  (Source location unavailable)\n");
            return output;
        }

        let line_idx = line - 1;

        let start_line = if line_idx > 0 { line_idx - 1 } else { line_idx };
        let end_line = cmp::min(line_idx + 1, self.lines.len() - 1);

        output.push_str("\n");

        for i in start_line..=end_line {
            let indicator = if i == line_idx { ">" } else { " " };
            let content = self.lines[i];

            if i == line_idx {
                let col_idx = column.saturating_sub(1).min(content.len());
                let left = &content[..col_idx];
                let right = &content[col_idx..];

                output.push_str(&format!(
                    "{:>4} {} | {}{}{}\n",
                    i + 1,
                    indicator,
                    left,
                    "", // Removed ANSI color codes for core logic, can be handled by UI
                    right
                ));

                let padding = " ".repeat(7 + column - 1);
                output.push_str(&format!("{}  ^\n", padding));
            } 
            else {
                output.push_str(&format!("{:>4} {} | {}\n", i + 1, indicator, content));
            }
        }
        output.push_str("\n");
        output
    }


    /// Reports a lexical error
    pub fn report_lexical(&self, message: &str, line: usize, column: usize) -> String {
        self.report("Lexical", message, line, column)
    }

    /// Reports a syntax error
    pub fn report_syntax(&self, message: &str, line: usize, column: usize) -> String {
        self.report("Syntax", message, line, column)
    }

    /// Reports a scope error
    pub fn report_scope(&self, message: &str, line: usize, column: usize) -> String {
        self.report("Scope", message, line, column)
    }

    /// Reports a type error
    pub fn report_type(&self, message: &str, line: usize, column: usize) -> String {
        self.report("Type", message, line, column)
    }
}