//Crie a const para a frase aqui
// A)
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

// B)
const trocar = (frase) => {
    return frase.replace("verde", "rosa").replace("azul", "laranja")
}
console.log(trocar(frase))

// C)
const verificar = (frase) => {

    let contemVerde = frase.includes("verde")
    let contemLaranja = frase.includes("laranja")

    if(contemVerde && contemLaranja){
        console.log("Contem verde e laranja.")
    } else {
        console.log("Não contem verde e laranja")
    }
}
console.log(verificar(frase))

// EXTRA)
const maiuscula = (frase) => {
    return frase.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR' )
}
console.log(maiuscula(frase))