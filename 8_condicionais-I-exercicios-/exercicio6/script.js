const generoUsuario = prompt("Qual o genêro do filme?").toLowerCase()

const precoUsuario = Number(prompt("Qual preço do ingresso?"))


if(generoUsuario === "fantasia" && precoUsuario < 15){
   const lancheUsuario = prompt("Qual lanche? Pipoca, chocolate, doce e etc ") 
    
    console.log("Bom filme! Aproveite o(a) seu(sua)", lancheUsuario)

} else {
    console.log("Escolha outro filme :(")
}