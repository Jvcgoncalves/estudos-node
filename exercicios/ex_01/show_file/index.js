const fs = require("node:fs")

const showFile = async () => {
  return new Promise((resolve,rejects)=>{
    fs.readFile("./arquivo.txt","utf-8",(err,data)=>{
      if(err) 
        rejects(`${err}`)
      else 
        resolve()
        console.log(`${data}\n ------------`);
    })
  })
  .catch(err => console.log(err))
}

module.exports = showFile