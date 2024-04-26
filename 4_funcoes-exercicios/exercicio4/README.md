1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    
    ```
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    ```
    
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
    
    ```
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    ```
    
    - Exemplo
        
        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
        
        `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`
        
    - 💡  Dica
        
        <aside>
        ⭐ Na hora de criar a frase, você pode utilizar as template strings que vimos na aula anterior! As variáveis da frase, nesse caso, serão os próprios parâmetros recebidos na função
        
        </aside>