module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  importOrder: ['^@/(.*)$', '^[./]'],
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')]
}