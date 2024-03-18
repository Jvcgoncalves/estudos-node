const fs = require("node:fs") // moduluos nativos do node são importados assim
// node:<...>
const text = "Hello world!@#!#@!"

try{
  fs.writeFile("./arquivo.txt",text,"utf-8",(err)=>{
    if(err) throw err
    console.log("Sucesso");
  })
} catch(e){
  console.log(`error message ${e.message}`)
}