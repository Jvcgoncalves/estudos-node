const args = process.argv;

const namedArguments = {

}

process.argv.slice(2).forEach((arg,index,array) =>{
  if(arg.startsWith("--")){
    const argName = arg.slice(2) // -> tira o --
    const agrValue = array[index+1]
    namedArguments[argName] = agrValue
  }
})

console.log("Argumentos:", namedArguments);