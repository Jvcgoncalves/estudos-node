const path = require("node:path")

const dir = "src"
const file = "app.js"

const fullPath = path.join(__dirname)
console.log(fullPath);


const anyPath = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(__dirname,anyPath)

console.log(absolutePath);

// path.join(): Combina segmentos de caminho em um único caminho.
// path.resolve(): Resolve um caminho absoluto a partir de segmentos de caminho dados.
// path.basename(): Retorna o nome do arquivo ou diretório de um caminho.
// path.dirname(): Retorna o diretório pai de um caminho.
// path.extname(): Retorna a extensão do arquivo de um caminho.