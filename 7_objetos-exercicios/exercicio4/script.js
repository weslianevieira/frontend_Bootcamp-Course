// A)
const bio = {
    nome: "Wesliane",
    apelidos: ["Anne", "Aninha", "Wesli"]
}

function podeMeChamar(bio) {
    return `Eu sou ${bio.nome}, mas pode me chamar de: ${bio.apelidos[0]}, ${bio.apelidos[1]} ou ${bio.apelidos[2]}.`
}

console.log(podeMeChamar(bio))

// B)
const bio2 = { ...bio, apelidos: ["Nany", "Wes", "Kiki"]}

console.log(podeMeChamar(bio2))