// 1
let grausF = 77
let grausC1 = 80

const fToK = (grausF - 32) * (5/9) + 273.15
const cToF1 = grausC1 * (9/5) + 32
console.log("1 - A)", fToK, "K")
console.log("B)", cToF1, "F")

let grausC2 = 30
const cToF2 = grausC2 * (9/5) + 32
const fToK2 = (cToF2 - 32) * (5/9) + 273.15
console.log("C)", cToF2, "F", fToK2, "K")

const tempUser = Number(prompt("Digite um valor em graus Celsius"))
const cToF3 = tempUser * (9/5) + 32
const fToK3 = (cToF3 - 32) * (5/9) + 273.15
console.log("D)", cToF3,"F", fToK3, "K")

// 2
const energiaConsumida = Number(prompt("Insira a energia consumida"));
const desconto = Number(prompt("Insira a porcentagem de desconto"));

const porcentagemDesc = 1 - desconto / 100;
console.log(
    "A) O custo da sua conta é R$",
    0.05 * energiaConsumida,
    "B) O custo da sua conta com desconto é R$",
    0.05 * energiaConsumida * porcentagemDesc
);

// 3
let lbToKg = 210 * 0.453592
console.log(`A) 210lb (libra) equivalem a ${lbToKg.toFixed(2)}kg (quilograma)`)

let ozToKg = 10.5 * 0.0283495
console.log(`B) 10.5oz (onça) equivalem a ${ozToKg.toFixed(2)}kg (quilograma)`)

let miToM = 100 * 1609.34
console.log(`C) 100mi (milha) equivalem a ${miToM.toFixed(2)}m (metro)`)

ftToM = 50 * 0.3048
console.log(`D) 50ft (pés) equivalem a ${ftToM.toFixed(2)}m (metro)`)

galToL = 103.56 * 3.78541
console.log(`E) 103.56gal (galão) equivalem a ${galToL.toFixed(2)}L (litro)`)

xicToL = 450 * 0.24
console.log(`F) 450xic (xícara) equivalem a ${xicToL.toFixed(2)}L (litro)`)

let xicUser = Number(prompt("Quantas xícaras?"))
let xicToL2 = xicUser * 0.24
console.log(`G) ${xicUser}xic (xícara) equivalem a ${xicToL2.toFixed(2)}L (litro)`)
