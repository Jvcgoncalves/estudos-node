const fs = require("node:fs")

const deleteFile = async () => {
  return new Promise((resolve,rejects)=>{
    fs.unlink("./arquivo.txt",(err)=>{
      if(err) 
        rejects(err) 
      else
        resolve()
        console.log("Arquivo deletado com sucesso\n ------------");
    })
  })
  .catch(err => console.log(err))
}

module.exports = deleteFile