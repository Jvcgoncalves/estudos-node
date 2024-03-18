const fs = require("node:fs")

const createFile = async (file_content) => {
  return new Promise((resolve,rejects)=>{
    fs.appendFile("./arquivo.txt",file_content,"utf-8", (err)=>{
      if(err) 
        rejects(`${err}`)
      else 
        resolve()
        console.log("Arquivo criado com sucesso\n ------------");
    })
  })
  .catch(err => console.log(err))
  
}

module.exports = createFile