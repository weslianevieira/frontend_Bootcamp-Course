- **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1.  Leia o código abaixo
        
        ```jsx
        const filme = {
        	nome: "Auto da Compadecida", 
        	ano: 2000, 
        	elenco: [
        		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        		"Virginia Cavendish"
        		], 
        	transmissoesHoje: [
        		{canal: "Telecine", horario: "21h"}, 
        		{canal: "Canal Brasil", horario: "19h"}, 
        		{canal: "Globo", horario: "14h"}
        		]
        }
        
        console.log(filme.elenco[0])
        // Matheus Nachtergaele
        console.log(filme.elenco[filme.elenco.length - 1])
        // Virginia Cavendish
        console.log(filme.transmissoesHoje[2])
        // {canal: "Globo", horario: "14h"}
        ```
        
        a) O que vai ser impresso no console?
        
    2. Leia o código abaixo
        
        ```jsx
        const cachorro = {
        	nome: "Juca", 
        	idade: 3, 
        	raca: "SRD"
        }
        
        const gato = {...cachorro, nome: "Juba"}
        
        const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
        
        console.log(cachorro)
        // { nome: "Juca", idade: 3, raca: "SRD"}
        console.log(gato)
        // { nome: "Juba", idade: 3, raca: "SRD"}
        console.log(tartaruga)
        // { nome: "Jubo", idade: 3, raca: "SRD"}
        ```
        
        a) O que vai ser impresso no console?
        
        b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
        Ele faz uma cópia do que é pedido

    3. Leia o código abaixo
    
    ```jsx
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    // false
    console.log(minhaFuncao(pessoa, "altura"))
    // undefined
    ```
    
    a) O que vai ser impresso no console?
    
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    A função recebe um objeto e uma propriedade, e retorna o valor.