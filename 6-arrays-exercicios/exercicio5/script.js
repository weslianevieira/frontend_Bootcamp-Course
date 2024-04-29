//A)
listaDeTarefas = []

//B)

let tarefa1 = prompt("Qual a primeira tarefa do dia?")
let tarefa2 = prompt("Qual a segunda tarefa do dia?")
let tarefa3 = prompt("Qual a terceira tarefa do dia?")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa2)

console.log(listaDeTarefas)
// ['dobrar lençol', 'escovar os dentes', 'escovar os dentes']

//D)
const indiceUsuario = Number(prompt("Digite o índice de uma tarefa que já realizou: 0, 1 ou 2"))

//E)
listaDeTarefas.splice(indiceUsuario, 1)

console.log(listaDeTarefas)