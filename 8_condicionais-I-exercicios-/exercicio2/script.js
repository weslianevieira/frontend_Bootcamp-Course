
function verificarSituação(idade, terminouEnsinoMedio, estaCursandoFaculdade) {
    if (idade >= 18) {
        console.log("A pessoa é maior de idade");
    } else {
        console.log("A pessoa é menor de idade");
    }

    if (terminouEnsinoMedio) {
        console.log("A pessoa terminou o ensino médio");
    } else {
        console.log("A pessoa não terminou o ensino médio");
    }

    if (estaCursandoFaculdade) {
        console.log("A pessoa está cursando alguma faculdade");
    } else {
        console.log("A pessoa não está cursando alguma faculdade");
    }
}

verificarSituação(20, true , false)