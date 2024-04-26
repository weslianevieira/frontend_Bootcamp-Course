- **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. Leia o código abaixo
        
        ```jsx
        function minhaFuncao(variavel) {
        	return variavel * 5
        }
        
        console.log(minhaFuncao(2)) 
        console.log(minhaFuncao(10)) 
        ```
        
        a) O que vai ser impresso no console?
        10 e 50

        b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
        Não apareceria nada no console.

    2. Leia o código abaixo
        
        ```jsx
        let textoDoUsuario = prompt("Insira um texto");
        
        const outraFuncao = function(texto) {
        	return texto.toLowerCase().includes("cenoura")
        }
        
        const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)
        ```
        
        a. Explique o que essa função faz e qual é sua utilidade
        A função recebe um texto, o transforma para letras minúsculas e verifica se a string cenoura aparece em algum momento.

        b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
             i.   `Eu gosto de cenoura`
             ii.  `CENOURA é bom pra vista`
             iii. `Cenouras crescem na terra`

             i.   true
             ii.  true
             iii. true
             