/**
 * Simple markdown parser for chatbot messages
 * Handles basic markdown formatting like **bold** text
 */

// [SECURITY FIX] Added escapeHtml to neutralise HTML special characters in
// text received from the AI/WebSocket backend before injecting any HTML tags.
// Without this, a response containing **<script>alert(1)</script>** would be
// passed through as <strong><script>alert(1)</script></strong> and executed
// when inserted via innerHTML. Escaping first ensures embedded HTML is inert.
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const parseMarkdown = (text: string): string => {
  if (!text) return text;

  // [SECURITY FIX] Escape the raw text before applying markdown replacements
  // so that HTML special characters in the source are inert in the output.
  const safe = escapeHtml(text);

  // Convert **text** to <strong>text</strong>
  let parsed = safe.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Convert *text* to <em>text</em> (italic)
  parsed = parsed.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Convert line breaks to <br> tags
  parsed = parsed.replace(/\n/g, "<br>");

  return parsed;
};

/**
 * Parse markdown for TypeWriter component
 * Returns an array of HTML strings that can be safely inserted via innerHTML
 */
export const parseMarkdownForTypeWriter = (text: string): string[] => {
  if (!text) return [];

  // [SECURITY FIX] Escape the input text before processing markdown so that
  // any HTML special characters in AI-supplied content are inert.
  const safe = escapeHtml(text);

  const result: string[] = [];

  // Find all markdown patterns
  const boldRegex = /\*\*(.*?)\*\*/g;
  const italicRegex = /\*(.*?)\*/g;
  const lineBreakRegex = /\n/g;

  // Collect all matches with their positions
  const matches: Array<{ start: number; end: number; replacement: string }> =
    [];

  let match;

  // Find bold matches
  while ((match = boldRegex.exec(safe)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      replacement: `<strong>${match[1]}</strong>`,
    });
  }

  // Find italic matches
  while ((match = italicRegex.exec(safe)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + match[0].length,
      replacement: `<em>${match[1]}</em>`,
    });
  }

  // Find line break matches
  while ((match = lineBreakRegex.exec(safe)) !== null) {
    matches.push({
      start: match.index,
      end: match.index + 1,
      replacement: "<br>",
    });
  }

  // Sort matches by start position
  matches.sort((a, b) => a.start - b.start);

  // Build the result by processing text character by character
  let i = 0;
  let matchIndex = 0;

  while (i < safe.length) {
    // Check if we're at the start of a match
    if (matchIndex < matches.length && i === matches[matchIndex].start) {
      const currentMatch = matches[matchIndex];
      result.push(currentMatch.replacement);
      i = currentMatch.end;
      matchIndex++;
    } else {
      // Add single character (already HTML-escaped)
      result.push(safe[i]);
      i++;
    }
  }

  return result;
};
