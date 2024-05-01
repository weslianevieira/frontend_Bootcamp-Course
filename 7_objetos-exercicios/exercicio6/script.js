// A)
let carrinho = []

// B)

const abacaxi = { nome: "Abacaxi", disponibilidade: true }
const melancia = { nome: "Melancia", disponibilidade: false }
const tomate = { nome: "Tomate", disponibilidade: true }

// C)
function frutasNoSacolao(fruta) {
   carrinho.push(fruta)
     
}

frutasNoSacolao(abacaxi)
frutasNoSacolao(melancia)
frutasNoSacolao(tomate)

//D)
console.log(carrinho)
// [{…}, {…}, {…}]