module.exports = {
  createOldCatalogs: true,
  indentation: 4,
  lexers: {
    js: ["JsxLexer"],
    ts: ["JsxLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],

    default: ["JsxLexer"],
  },
  locales: ["eng", "nl"],
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  verbose: true,
}
