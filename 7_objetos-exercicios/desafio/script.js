// // 1)
// const nomeUsuario = prompt("Qual seu nome?")
// const idadeUsuario = Number(prompt("Qual seu idade?"))
// const profissaoUsuario = prompt("Qual seu profissao?")

// function criaPessoa() {
//     return  {
//         nome: nomeUsuario,
//         idade: idadeUsuario,
//         profissao: profissaoUsuario
//     }
// }

// console.log(criaPessoa())
// console.log(typeof criaPessoa())

// 2)

const crepusculo = { 
    nome: "Crepúsculo", 
    anoDeLancamento: 2008 
}

const carros = { 
    nome: "Carros", 
    anoDeLancamento: 2006 
}

function analisarFilme(primeiroFilme,  segundoFilme) {
    console.log("O primeiro filme foi lançado antes do segundo?", primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento)

    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", primeiroFilme.anoDeLancamento === segundoFilme.anoDeLancamento)
}

analisarFilme(carros, crepusculo)

// 3)
const morango = {
    nome: "morango",
    preco: 15,
    disponibilidade: true,
}

const chuchu = {
    nome: "chuchu",
    preco: 4,
 
    disponibilidade: true,
}

const abobora = {
    nome: "abóbora",
    preco: 10,
    disponibilidade: false,
}

function inverteDisponibilidade(fruta) {
    return !fruta.disponibilidade
}

console.log(inverteDisponibilidade(abobora))