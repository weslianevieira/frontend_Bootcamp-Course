let a = prompt("Digite um número");
let b = prompt("Digite outro número");

//Casting (concversão de tipo)
let num1 = Number(a)
let num2 = Number(b)

let soma = num1 + num2;
let multiplicacao = num1 * num2;

console.log(typeof num1) //number
console.log(typeof num2)//number

console.log(`1. O primeiro número somado ao segundo número resulta em ${soma}`);
console.log(`2. O primeiro número multiplicado ao segundo número resulta em ${multiplicacao}`);
