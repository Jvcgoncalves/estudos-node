// process.stdout.write("Olá, mundo!")

// process.stdin.on("data", data =>{
//   process.stdout.write("\nDigitou: " + data)
// })  

const readLine = require("node:readline")

const rl = readLine.createInterface({input: process.stdin,output: process.stdout})

// rl.once("line", input => {
//   rl.write(`Você escreveu: ${input}`)
// })

rl.question("Qual o seu nome? ", question =>{
  rl.write(question+"\n")
  // rl.close()
})

rl.once("close", () =>{
  rl.write("Saindo...")
  // process.exit(0) // -> encerrar o programa corretamente pois estamos usando o process 
})

rl.on("SIGINT", ()=>{
  rl.question("Deseja realmente sair (y/n) ", answer =>{
    if (answer.trim().toLowerCase() === "y"){
      process.exit(0)
    } else{
      rl.write("Você escolheu continuar")
    }
  })
})
