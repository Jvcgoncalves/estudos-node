const os = require("node:os")

class Computer_data{

  static #operational_system_name
  static #architecture_system
  static #cpus_model
  static #up_time
  static #ram_used_memory

  static #getOperationalSystemName(){
    this.#operational_system_name = os.platform()
  }

  static #getArchitectureSystem(){
    this.#architecture_system = os.arch()
  }

  static #getCpusModel(){
    this.#cpus_model = os.cpus()[0].model
  }

  static #getUpTime(){
    this.#up_time = this.#transformToMinutes({time:Number.parseInt(os.uptime())})
  }

  static #transformToMinutes({time}){
    const hours = Number.parseInt(time / 3600)
    const minutes = Number.parseInt((time % 3600) / 60 )
    const seconds = Number.parseInt((time % 3600) % 60 )
    return `${hours}:${minutes}:${seconds}`
  }

  static #getRamUsedMemory(){
    this.#ram_used_memory = this.#transformToPercent({total:os.totalmem(),free:os.freemem()})
  }

  static #transformToPercent({total,free}){
    const usedMemory = (free*100) / total 
    return `${100 - usedMemory.toFixed(2)}%`
  }

  static setRequestedData(){
    this.#getOperationalSystemName();
    this.#getArchitectureSystem();
    this.#getCpusModel();
    this.#getUpTime();
    this.#getRamUsedMemory();
  }

  static showInfo(){
    return (
    `
    < ------------ >
    operational system name: ${this.#operational_system_name}
    architecture system: ${this.#architecture_system}
    cpus model: ${this.#cpus_model}
    up time: ${this.#up_time}
    ram sed memory: ${this.#ram_used_memory}
    < ------------ >
    
    `
  )

  }
}

module.exports = Computer_data 