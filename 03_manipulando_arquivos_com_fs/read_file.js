const fs = require("node:fs");

try{
  fs.readFile("./arquivo.txt","utf-8",(err,data)=>{
    if(err) throw err
    console.log(data);
  })
} catch(e){
  console.log(`error message ${e.message}`)
}