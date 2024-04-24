const nome = prompt("Qual o nome completo?")
const dia = Number(prompt("Qual o dia de nascimento?"))
const mes = Number(prompt("Qual o mês de nascimento?"))
const ano = Number(prompt("Qual o ano de nascimento?"))
const endereco = prompt("Qual o endereço?")
const cpf = Number(prompt("Qual o CPF?"))
const escolaridade = prompt("Qual a escolaridade?")
const cnh = confirm("Possui CNH?")
const filhos = Number(prompt("Quantos filhos possui?"))
const cargo = prompt("Cargo atual")
const salario = Number(prompt("Qual o salário?"))
const comissao = confirm("Recebe comissão?")
const admissao = prompt("Qual o ano de admissão?")

console.log("Nome", typeof nome)
console.log("Dia", typeof dia)
console.log("Mês", typeof mes)
console.log("Ano", typeof ano)
console.log("Endereço", typeof endereco)
console.log("CPF", typeof cpf)
console.log("Escolaridade", typeof escolaridade)
console.log("CNH", typeof cnh)
console.log("Filhos", typeof filhos)
console.log("Cargo", typeof cargo)
console.log("Salario", typeof salario)
console.log("Comissão", typeof comissao)
console.log("Admissão", typeof admissao)

console.log(
    `
   Nome Completo: ${nome},
   Data de Nascimento: ${dia}/${mes}/${ano},
   Endereço: ${endereco},
   CPF: ${cpf},
   Escolaridade: ${escolaridade},
   CNH: ${cnh},
   Número de filhos: ${filhos},
   Cargo atual: ${cargo},
   Salário: ${salario},
   Recebe comissão:${comissao}
   `
)

