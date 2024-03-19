const fs = require("node:fs")
const readline = require("node:readline")
const path = require("node:path")

const userInterface = readline.createInterface({input: process.stdin,output: process.stdout})

async function createNote(){
  const fileName = await createQuestion("Digite o nome da nota: ")
  const filePath = path.join(path.resolve("./notes" , fileName.toString()))
  const fileContent = await createQuestion("Digite o conteúdo da nota: \n")
  fs.writeFileSync(`${filePath}.txt`,fileContent.toString(),"utf-8")
}

function checkFileExist(path){
   if(!fs.existsSync(path)){
    console.log("Arquivo não encontrado, verifique a ortografia");
    return false
  }
  return true
}

function seeAllNotes(){
  const notesArray = [...fs.readdirSync(path.resolve("./notes"))]
  console.log("Todas as notas salvas:")
  notesArray.forEach(note =>{
    console.log(note.slice(0,-4));
  })
}

async function seeSignleNote(){
  seeAllNotes()
  const fileName = await createQuestion("Digite o nome da nota que deseja ler: ")

  if(fileName === 0) {
    console.log("Por favor informe um nome!");
    return
  }

  let filePath = path.resolve("./notes",`${fileName}.txt`)

  if(!checkFileExist(filePath)) {
    return
  }

  console.log(fs.readFileSync(filePath,"utf-8"))
}

async function excludeNote(){
  seeAllNotes()
  let fileName = await createQuestion("Digite o nome da nota que deseja excluir (sem a extensão!): ")

  if(fileName === 0) {
    console.log("Por favor informe um nome!");
    return 
  }

  let filePath = path.resolve("./notes",`${fileName}.txt`)

  if(!checkFileExist(filePath)) {
    return
  } 

  const confirm = await createQuestion("Tem certeza que deseja exlcuir, <*por padrão é não*> (s/n) ? ")

  if(confirm === 0 || confirm.toLowerCase() === "n") {
    console.log("Operação cancelada, nota não exluida!");
    return 
  } else if( confirm.toLowerCase() === "s"){
    fs.unlinkSync(filePath)
  }
}

function menu(){
  console.log("----------------")
  console.log("Escolha uma opção")
  console.log("1 - Adicionar notas")
  console.log("2 - Ver todas as notas")
  console.log("3 - Ver uma nota expecífica")
  console.log("4 - Excluír uma nota")
  console.log("5 - Editar uma nota")
  console.log("6 - Sair")
  console.log("----------------")
}

async function editNote(){
  seeAllNotes()
  let oldFilePath = await createQuestion("Digite o nome da nota que deseja editar (sem a extensão!): ")

  if(oldFilePath === 0) {
    console.log("Por favor informe um nome!");
    return 
  }

  oldFilePath = path.resolve("./notes",`${oldFilePath}.txt`)

  if(!checkFileExist(oldFilePath)) {
    return
  } 
  const choice = await createQuestion("1. Renomear\n 2. Editar o conteúdo\n 3. Ambas operações\n 4. Cancelar\n")

  switch(+choice){
    case 1:
      let newFileName = await createQuestion("Digite o novo nome da nota (sem a extensão!): ")
      newFileName = path.join(path.resolve("./notes"),`${newFileName}.txt`)
      fs.renameSync(oldFilePath,newFileName)
    break;
    case 2:
      const pastFileContent = fs.readFileSync(oldFilePath,"utf-8")
      console.log(`Conteúdo antigo: \n\n${pastFileContent}`)
      const newFileContent = await createQuestion("Digite o novo conteúdo do arquivo: \n\n")

      fs.writeFileSync(oldFilePath, newFileContent, "utf-8")
    break;
    case 3:
      const lastFileContent = fs.readFileSync(oldFilePath,"utf-8")
      console.log(`Conteúdo antigo: \n${lastFileContent}`)
      const newContent = await createQuestion("Digite o novo conteúdo do arquivo: \n")

      fs.writeFileSync(oldFilePath, newContent, "utf-8")

      let newName = await createQuestion("Digite o novo nome da nota (sem a extensão!): ")
      newName = path.join(path.resolve("./notes"),`${newName}.txt`)
      fs.renameSync(oldFilePath,newName)
    break;
    case 4:
      console.log("Operação cancelada");
      return
    default:
      console.log("Opção inválida");
    }
}

function createQuestion(question){
  return new Promise(resolve =>{
    userInterface.question(question, answer=>{
      if(isNaN(+answer)) resolve(answer)
      else resolve(+answer)
    })
  })
}

async function handleUserOption(option){
  console.clear()
  switch(option){
    case 1:
      await createNote()
    break;

    case 2:
      seeAllNotes()
    break;

    case 3:
      await seeSignleNote()
    break;

    case 4:
      await excludeNote()
    break;

    case 5:
      await editNote()
    break;

    case 6:
      console.log("Fechando o programa...");
      userInterface.close()
      process.exit(0)

    default:
      console.log("Opção inválida!!!");
  }
}
async function createUi(){
  
  do{
    menu()
    await handleUserOption(await createQuestion(""))
  } while (true)
}

function run(){
  if(!fs.existsSync("./notes")){
    fs.mkdirSync("notes")
  }
  createUi()
}

run()