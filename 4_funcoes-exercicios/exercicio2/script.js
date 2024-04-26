// A
const soma = (a, b) => {
    return a + b;
}
console.log("2 - A)", soma(5,9))

//B
const comparacao = (a, b) => {
    let resultado = a >= b
    console.log(`B) ${resultado}`)
}
comparacao(2,5)

// C 
const paridade = (num) => {
    if (num % 2 === 0) {
        console.log(`C) ${num} é par`)
    } else {
        console.log(`${num} é ímpar`)
    }
}
paridade(8)

// D
const salarioLiquido = (salarioBruto) => {
    let  salario = salarioBruto - salarioBruto * 0.1
    console.log(salario)
}
salarioLiquido(1000)