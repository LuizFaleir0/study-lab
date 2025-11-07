import { type Config } from 'prettier'

const config: Config = {
  semi: true, // Adiciona ponto e vírgula no final das linhas
  singleQuote: true, // Usa aspas simples
  trailingComma: 'es5', // Vírgula final em objetos/arrays quando possível
  tabWidth: 2, // Tamanho da indentação
  useTabs: false, // Usa espaços em vez de tabs
  printWidth: 100, // Quebra de linha máxima
  bracketSpacing: true, // Espaço dentro de chaves: { foo: bar }
  arrowParens: 'always', // Sempre usa parênteses em arrow functions
  endOfLine: 'lf', // Força quebra de linha tipo LF (Unix)
}

export default config
