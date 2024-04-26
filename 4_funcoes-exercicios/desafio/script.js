//1- A)
const imprimeNoConsole = (variavel) => {
    console.log(variavel)
}

//B
const soma = (num1, num2) => {
    const resultado = num1 + num2
    imprimeNoConsole(resultado)
}

soma(10, 15)

// 2 

const calcularHipotenusa = (catetoA, catetoB) => {
    const hipotenusa = Math.sqrt(catetoA ** 2 + catetoB ** 2) 
    console.log(hipotenusa)
}
calcularHipotenusa(10, 40)