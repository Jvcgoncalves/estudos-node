const path = require("path")
const Create_log = require("./create_log/Create_log.cjs")
const Computer_data = require("./show_computer_data/Computer_data.cjs")

setInterval(()=>{
  Computer_data.setRequestedData()
},1000)

Create_log.checkDir()

setInterval( ()=>{
  Create_log.updateLogFile({fileContent: Computer_data.showInfo()})
},1000)