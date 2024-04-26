// A
const soma = (a, b) => {
    return a + b
}
console.log("A)", soma(2, 10))

function subtracao(a, b) {
    return a - b
}
console.log(subtracao(2, 10))

const multiplicacao = (a, b) => {
    return a * b
}
console.log(multiplicacao(2, 10))

const divisao = (a, b) => {
    return a / b
}
console.log(divisao(2, 10))

// B
let num1 = Number(prompt("Diga um número"))
let num2 = Number(prompt("Diga outro número"))

// C 
console.log(`C) Números inseridos: ${num1} e ${num2}`)
console.log("Soma:", soma(num1, num2))
console.log("Subtração:", subtracao(num1, num2))
console.log("Multiplicação:", multiplicacao(num1, num2))
console.log("Divisão:", divisao(num1, num2))