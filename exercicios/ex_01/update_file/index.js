const fs = require("node:fs")

const updateFile = async (newContent) => {
  return new Promise((resolve,rejects)=>{
    fs.writeFile("./arquivo.txt",newContent,"utf-8",(err)=>{
      if(err) 
        rejects(err)
      else
        resolve();
        console.log("Arquivo atualizado com sucesso\n ------------");
    })
  })
  .catch(err => console.log(err))
}

module.exports = updateFile