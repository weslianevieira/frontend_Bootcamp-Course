// parte 1
console.log(5 > 20 && 5 < 2)
console.log(5 === 5 || 5 === 5)
console.log(!(20 > 50))
console.log(!(20 > 50 || 50 > 60))

// parte 2

console.log("1)", 2000 + 45.50)

console.log("2)", 5748.50 * 0.2)

let desconto = (2000 + 5748.50 * 0.2) * 0.05
console.log("3)", (2000 + 5748.50 * 0.2) - desconto)

const salarioFixo = 2000
const creche = 45.50
let janeiro = 5784.50
let fevereiro = 3418.41
let marco = 4124.10
let abril = 1874.00
let maio = 7000.00
let junho = 9450.00

const salario1 = salarioFixo + creche + janeiro * 0.2
const desconto1 = salario1 * 0.05
console.log("4) Salário J", salario1 - desconto1)

const salario2 = salarioFixo + creche + fevereiro * 0.2
const desconto2 = salario2 * 0.05
console.log("4) Salário F", salario2 - desconto2)

const salario3 = salarioFixo + creche + marco * 0.2
const desconto3 = salario3 * 0.05
console.log("4) Salário M", salario3 - desconto3)

const salario4 = salarioFixo + creche + abril * 0.2
const desconto4 = salario4 * 0.05
console.log("4) Salário A", salario4 - desconto4)

const salario5 = salarioFixo + creche + maio * 0.2
const desconto5 = salario5 * 0.05
console.log("4) Salário M", salario5 - desconto5)

const salario6 = salarioFixo + creche + junho * 0.2
const desconto6 = salario6 * 0.05
console.log("4) Salário J", salario6 - desconto6)

console.log("5)", (salario1 + salario2 + salario3 + salario4 + salario5 + salario6) / 6)