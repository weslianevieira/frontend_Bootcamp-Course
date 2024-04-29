- **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
        
        ```jsx
        let array
        console.log('a. ', array)
        // a variável 'array' é declarada, mas não inicializada. 
        // a. undefined

        array = null
        console.log('b. ', array)
        // A variável array é atribuída o valor null
        // b. null

        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('c. ', array.length)
        //  variável array é atribuída um array com 11 elementos.
        // c. 11

        let i = 0
        console.log('d. ', array[i])
        // Uma variável i é declarada e inicializada com o valor 0.
        // O valor do primeiro elemento do array 'array' é impresso.
        // d. 3

        array[i+1] = 19 
        console.log('e. ', array)
        // O segundo elemento do array 'array' é substituído por 19.
        // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        const valor = array[i+6]
        console.log**('f. ', valor)**
        // O valor do sétimo elemento do array 'array' é atribuído à constante valor.
        // Como array é [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] e i é 0, então o sétimo elemento é 9.
        // d. 9
        ```
        
    2. Leia o código abaixo com atenção 
        
        ```jsx
        const frase = prompt("Digite uma frase")
        
        console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
         //"SUBI NUM ÔNIBUS EM MIRROCOS"  29
        ```
        
        Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

       