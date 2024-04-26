- **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
        
        ```jsx
        const bool1 = true
        const bool2 = false
        const bool3 = !bool2
        
        let resultado = bool1 && bool2 
        console.log("a. ", resultado) //false
        // true && false => false!

        resultado = bool1 && bool2 && bool3 
        console.log("b. ", resultado) // false
        // true && false && true => false && true => false
        
        resultado = !resultado && (bool1 || bool2) 
        console.log("c. ", resultado)
        // true && (true || false) => true && true => true
        
        console.log("d. ", typeof resultado) //boolean
        ```
        
    2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
        
        ```jsx
        let primeiroNumero = prompt("Digite um numero!")
        let segundoNumero = prompt("Digite outro numero!")
        
        const soma = primeiroNumero + segundoNumero
        
        console.log(soma)
        // primeiroNumero e segundoNumero são string, com o operador +, elas serão agrupadas.
        ```
        
    3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
    ```jsx
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))
    ```
    