const fs = require("node:fs")
const path = require("node:path")

const logDirPath = path.join("/","log")

class Create_log{

  static checkDir(){
    if(!fs.existsSync(logDirPath)){
      fs.mkdirSync(logDirPath)
    }
  }

  static updateLogFile({fileContent}){
    fs.appendFileSync(path.join(logDirPath,"log.txt"),fileContent,"utf-8")
  }
}

module.exports = Create_log;