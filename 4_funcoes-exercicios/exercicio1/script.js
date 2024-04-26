function cumprimentar(nome) {
    console.log("Olá,", nome, "!")
}

cumprimentar("Wesliane")

// expressão de função, função anônima, ou função não-nomeada.
const darOi = function (nome) {
    console.log(`Olá, ${nome}!`)
}
darOi("Anne")

// Arrow function

const falarOi = (nome) => {
    console.log(`Olá, ${nome}!`)
}
falarOi("João")