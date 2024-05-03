const turnoUsuario = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).").toLowerCase()

// A)
if (turnoUsuario === "m") {
    console.log("Bom dia!")
} else if (turnoUsuario === "v") {
    console.log("Boa tarde!")
} else if (turnoUsuario === "n") {
    console.log("Boa noite!")
} else {
    console.log("Opção inválida.")
}

//B)
switch (turnoUsuario) {
    case "m":
        console.log("Bom dia!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
    case "n":
        console.log("Boa noite!")
        break;

    default:
        console.log("Opção inválida.")
        break;
}