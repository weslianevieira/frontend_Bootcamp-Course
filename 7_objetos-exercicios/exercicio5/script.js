const pessoa1 = {
    nome: "Marcos",
    idade: 25,
    profissao: "Professor"
}

const pessoa2 = {
    nome: "Júlia",
    idade: 22,
    profissao: "Bailarina"
}

function ficha(pessoa) {
    return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
}

console.log(ficha(pessoa1))
// ['Marcos', 6, 25, 'Professor', 9]
console.log(ficha(pessoa2))
// ['Júlia', 5, 22, 'Bailarina', 9]