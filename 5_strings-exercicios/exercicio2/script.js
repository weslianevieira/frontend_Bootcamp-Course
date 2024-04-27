// 2 - A)

const semEspaco = (minhaString) => {
    return minhaString.trim()
}
console.log(semEspaco("Eu não sou supersticioso, mas sou um pouco ________.      "))

// B)
const tamanhoComEspaco = (minhaString) => {
    return minhaString.length
}
const tamanhoSemEspaco = (minhaString) => {
    return minhaString.trim().length
}

console.log(tamanhoComEspaco("Eu não sou supersticioso, mas sou um pouco ________.      "))
console.log(tamanhoSemEspaco("Eu não sou supersticioso, mas sou um pouco ________.      "))

// C

const substituir = (minhaString) => {
    return minhaString.replace("________", "sticioso")
}
console.log(substituir("Eu não sou supersticioso, mas sou um pouco ________.      "))