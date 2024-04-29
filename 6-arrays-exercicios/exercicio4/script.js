const listaDeComidasFavoritas = ["mandioca", "farofa", "sorvete de creme", "sushi", "feijão"]

//A)
console.log(listaDeComidasFavoritas)

//B)
console.log(`
Essas são as minhas comidas preferidas: \n
${listaDeComidasFavoritas[0]}\n
${listaDeComidasFavoritas[1]}\n
${listaDeComidasFavoritas[2]}\n
${listaDeComidasFavoritas[3]}\n
${listaDeComidasFavoritas[4]}\n
`)

//C)
const comidaUsuario = prompt("Qual sua comida praferida ?")

listaDeComidasFavoritas[1] = comidaUsuario

console.log(listaDeComidasFavoritas)