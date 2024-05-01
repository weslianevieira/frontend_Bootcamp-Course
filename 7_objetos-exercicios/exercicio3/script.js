const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}

// A)
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}
console.log(pokemon2) 
//{nome: 'Squirtle', tipo: 'Água', nivel: 5}

// B)
// pokemon1.ataque = []
pokemon1["ataque"] = []
console.log(pokemon1)
//{nome: 'Bulbasaur', tipo: 'Grama', nivel: 5, ataque: Array(0)}

// C)
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataque.push(ataque)
console.log(pokemon1)
//{nome: 'Bulbasaur', tipo: 'Grama', nivel: 5, ataque: Array(1)}

// D) 
const pokemon3 = {
    ...pokemon2,
    ...pokemon1.ataque
}
console.log(pokemon3)
//{0: {…}, nome: 'Squirtle', tipo: 'Água', nivel: 5}

// E)
const ataque2 = {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}
pokemon1.ataque.push(ataque2)
console.log(pokemon1)
//{nome: 'Bulbasaur', tipo: 'Grama', nivel: 5, ataque: Array(2)}

// F)
const ataque3 = {
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
}
pokemon1.ataque.push(ataque3)
console.log(pokemon1)
//{nome: 'Bulbasaur', tipo: 'Grama', nivel: 5, ataque: Array(3)}
