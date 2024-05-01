function mostrarNacionalidade() {
    const nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase()

    if(nacionalidade === "brasileira") {
        return "Sua nacionalidade é brasileira."
    } else if(nacionalidade === "argentina"){
        return "Sua nacionalidade é argentina."
    } else if(nacionalidade === "uruguaia") {
        return "Sua nacionalidade é uruguaia."
    } else if(nacionalidade === "chilena") {
        return "Sua nacionalidade é chilena."
    } else if(nacionalidade === "colombiana") {
        return "Sua nacionalidade é colombiana."
    } else {
        return "Nacionalidade não encontrada"
    }
}

console.log(mostrarNacionalidade())