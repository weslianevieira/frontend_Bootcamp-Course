const nameUser = prompt("Nome completo.")
const gameTypeUser = prompt("IN (internacional) ou NA (nacional).").toLowerCase()
const gameStageUser = prompt("SF (semi-final) ou DT (decisão de terceiro lugar) ou FI (final).").toLowerCase()
const categoryUser = Number(prompt("Category: Can be option 1, 2, 3, or 4."))
const ticketAmountUser = Number(prompt("Quantos ingressos?"))

if (gameTypeUser === "na") {
    if (gameStageUser === "sf" ) {
        if (categoryUser === 1) {
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Semi-Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 1.320,00
            Valor total:  R$ ${(1320 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 2){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Semi-Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 880,00
            Valor total:  R$ ${(880 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 3){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Semi-Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 550,00
            Valor total:  R$ ${(550 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 4){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Semi-Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 220,00
            Valor total:  R$ ${(220 * ticketAmountUser).toFixed(2)}
            `)
        } else {
            console.log("Categoria inválida.")
        }
    } else if (gameStageUser === "dt") {
        if (categoryUser === 1) {
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Decisão de terceiro lugar
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 660,00
            Valor total:  R$ ${(660 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 2){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Decisão de terceiro lugar
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 440,00
            Valor total:  R$ ${(440 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 3){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Decisão de terceiro lugar
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 330,00
            Valor total:  R$ ${(330 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 4){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Decisão de terceiro lugar
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 170,00
            Valor total:  R$ ${(170 * ticketAmountUser).toFixed(2)}
            `)
        } else {
            console.log("Categoria inválida.")
        }
    } else if (gameStageUser === "fi") {
        if (categoryUser === 1) {
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 1.980,00
            Valor total:  R$ ${(1980 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 2){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 1.320,00
            Valor total:  R$ ${(1320 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 3){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Nacional
            Etapa do jogo: Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 880,00
            Valor total:  R$ ${(880 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 4){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo:Nacional
            Etapa do jogo: Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ 330,00
            Valor total:  R$ ${(330 * ticketAmountUser).toFixed(2)}
            `)
        } else {
            console.log("Categoria inválida.")
        }
    } else {
        console.log("Etapa do jogo inválida.")
    }


} else if (gameTypeUser === "in") {
    if (gameStageUser === "sf" ) {
        if (categoryUser === 1) {
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Semi-Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(1320 * 4.10).toFixed(2)}
            Valor total:  R$  ${(1320 * 4.10 * ticketAmountUser.toFixed(2))}
            `)
        } else if(categoryUser === 2){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Semi-Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(880 * 4.10).toFixed(2)}
            Valor total:  R$ ${(880 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 3){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Semi-Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(550 * 4.10).toFixed(2)}
            Valor total:  ${(550 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 4){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Semi-Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(220 * 4.10).toFixed(2)}
            Valor total:  ${(220 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else {
            console.log("Categoria inválida.")
        }
    } else if (gameStageUser === "dt") {
        if (categoryUser === 1) {
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Decisão do terceiro lugar
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(660 * 4.10).toFixed(2)}
            Valor total:  ${(660 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 2){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Decisão do terceiro lugar
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(440 * 4.10).toFixed(2)}
            Valor total:  ${(440 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 3){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Decisão do terceiro lugar
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(330 * 4.10)}
            Valor total:  ${(330 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 4){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Decisão do terceiro lugar
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(170 * 4.10).toFixed(2)}
            Valor total:  ${(170 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else {
            console.log("Categoria inválida.")
        }
    } else if (gameStageUser === "fi") {
        if (categoryUser === 1) {
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(1980 * 4.10).toFixed(2)}
            Valor total:  ${(1980 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 2){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(1320 * 4.10).toFixed(2)}
            Valor total:  ${(1320 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 3){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(880 * 4.10).toFixed(2)}
            Valor total:  ${(880 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else if(categoryUser === 4){
            console.log(`
            ---Dados da compra--- 
            Nome do cliente: ${nameUser}
            Tipo do jogo: Internacional
            Etapa do jogo: Final
            Categoria: ${categoryUser}
            Quantidade de Ingressos: ${ticketAmountUser}
            ---Valores--- 
            Valor do ingresso:  R$ ${(330 * 4.10).toFixed(2)}
            Valor total:  ${(330 * 4.10 * ticketAmountUser).toFixed(2)}
            `)
        } else {
            console.log("Categoria inválida.")
        }
    } else {
        console.log("Etapa do jogo inválida.")
    }
}