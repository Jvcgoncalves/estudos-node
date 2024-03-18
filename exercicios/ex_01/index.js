const createFile = require("./create_file");
const deleteFile = require("./delete_file");
const showFile = require("./show_file");
const updateFile = require("./update_file");

async function start(){
  await createFile("A situação selecionada na obra As Intermitências da Morte de José Saramago é um episódio familiar que nos dá conta do mal-estar provocado pela presença de um avô que, durante as refeições com o filho, a nora e o neto, treme muito das mãos, deixando cair a comida em cima da toalha e dos guardanapos, causando irritação aos familiares.")
  await showFile()
  await updateFile("Então, o filho arranja uma tigela de madeira e ordena ao pai que passe a comer sentado na soleira da porta, ao que a nora e o neto aceitam sem questionar.")
  await showFile()
  await deleteFile()
}

start() 
