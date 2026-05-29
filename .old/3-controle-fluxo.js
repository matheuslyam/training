// 3. Controle de Fluxo

/*
Controle de fluxo refere-se à ordem em que as instruções são executadas em um programa. JavaScript oferece várias estruturas de controle de fluxo, incluindo:
- Estruturas de controle de decisão: `if`, `else`, `switch`, `else if`
- Estruturas de controle de repetição: `for`, `while`, `do...while`
- Estruturas de controle de interrupção: `break`, `continue`, `return`
- Estruturas de controle de exceção: `try`, `catch`, `finally`, `throw`
*/

// --- estruturas de controle de decisão ---

/* As estruturas de controle de decisão permitem que o programa tome decisões com base em condições.
- `if`: Executa um bloco de código se uma condição for verdadeira.
- `else`: Executa um bloco de código se a condição do `if` for falsa.
- `else if`: Permite verificar múltiplas condições.
- `switch`: Permite comparar uma expressão com múltiplos casos e executar o bloco de código correspondente.
*/

// exemplo de if, else if e else
let idade = 65;
if (idade <18) {
    console.log("Menor de idade");
}
else if (idade >= 18 && idade < 65) { // && é o operador lógico "E", que verifica se ambas as condições são verdadeiras
    console.log("Adulto");
}
else {
    console.log("Idoso");
}

// exemplo de switch
let diaSemana = "quarta-feira";
switch (diaSemana) {
    case "segunda-feira":
        console.log("Hoje é segunda-feira");
        break; // O comando `break` é usado para sair do bloco de código do `switch` após a execução do caso correspondente.
    case "terça-feira":
        console.log("Hoje é terça-feira");
        break;
    case "quarta-feira":
        console.log("Hoje é quarta-feira");
        break;
    case "quinta-feira":
        console.log("Hoje é quinta-feira");
        break;
    case "sexta-feira":
        console.log("Hoje é sexta-feira");
        break;
    case "sábado":
        console.log("Hoje é sábado");
        break;
    case "domingo":
        console.log("Hoje é domingo");
        break;
    default: // O caso `default` é executado se nenhum dos casos anteriores corresponder à expressão.
        console.log("Dia da semana inválido");
}


// --- estruturas de controle de repetição ---

/* As estruturas de controle de repetição permitem que um bloco de código seja executado várias vezes.
- `for`: Executa um bloco de código um número específico de vezes, com uma variável de controle que é inicializada, testada e atualizada a cada iteração.
- `while`: Executa um bloco de código enquanto uma condição for verdadeira.
- `do...while`: Executa um bloco de código pelo menos uma vez e continua enquanto uma condição for verdadeira.
*/

// exemplo de for
for (let i = 0; i < 5; i++) { // o i significa "índice" e é comumente usado como variável de controle em loops.
    console.log(i); // imprime os números de 0 a 4
}

console.log("Fim do loop for");

// exemplo de while
let contador = 0;
while (contador < 5) {
    console.log(contador); // imprime os números de 0 a 4
    contador ++;
}
/*qual a diferena entre for e while? O loop `for` é geralmente usado quando o número de iterações é conhecido,
enquanto o loop `while` é mais adequado quando o número de iterações é desconhecido e depende de uma condição que pode mudar durante a execução do loop.
*/

console.log("Fim do loop while");

// exemplo de do...while
let numero = 0;
do {
    console.log(numero); // imprime o número 0
    numero ++;
} while (numero < 5); // o loop `do...while` garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.

console.log("Fim do loop do...while");


// --- estruturas de controle de interrupção ---

/* As estruturas de controle de interrupção permitem que o fluxo de execução seja alterado ou interrompido.
- `break`: Interrompe a execução de um loop ou de um bloco de código em um `switch`.
- `continue`: Pula a iteração atual de um loop e continua com a próxima iteração.
- `return`: Encerra a execução de uma função e retorna um valor (opcional).
*/

// exemplo de break
for (let i = 0; i < 10; i++) {
    if (i === 7) {
        break; // o loop é interrompido quando i é igual a 7, e os números de 0 a 6 são impressos.
    }
    console.log(i); // imprime os números de 0 a 6
}

// o comando `break` é útil para sair de loops ou blocos de código quando uma condição específica é atendida, evitando a execução desnecessária de código adicional.

console.log("Fim do loop com break");

// exemplo de continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; /* o comando `continue` é usado para pular a iteração atual do loop quando i é um número par, e apenas os números ímpares de 1 a 9 são impressos.
                    O operador `%` é o operador de módulo, que retorna o restante da divisão de i por 2. Se o resultado for 0, significa que i é um número par. */
    }
    console.log(i); // imprime os números ímpares de 1 a 9
}

console.log("Fim do loop com continue");

// exemplo de return
function somar(a, b) {
    return a + b; // o comando `return` encerra a execução da função e retorna a soma de a e b.
}

let resultado = somar(5, 3); /* traduzindo em mínimas palavras: let = variável, resultado = nome da variável, somar = nome da função, (5, 3) = argumentos passados para a função.
                                O resultado da função `somar(5, 3)` é 8, que é atribuído à variável `resultado`.*/
console.log(resultado); // imprime 8

/* o comando `return` é fundamental para funções, pois permite que elas produzam um resultado que pode ser usado em outras partes do programa. 
Ele também pode ser usado para encerrar a execução de uma função prematuramente, se necessário, retornando um valor específico ou simplesmente saindo da função
sem retornar nada (o que resultará em `undefined`).
*/

// --- estruturas de controle de exceção ---

/* As estruturas de controle de exceção permitem que o programa lide com erros e situações inesperadas de forma controlada.
- `try`: Define um bloco de código para testar erros.
- `catch`: Define um bloco de código para lidar com erros.
- `finally`: Define um bloco de código que será executado independentemente de um erro ter ocorrido ou não.
- `throw`: Permite lançar uma exceção personalizada.
*/

// exemplo de try, catch e finally 

try {
    let resultado = 10 / 0; // isso não causará um erro de JavaScript, mas o resultado será `Infinity`.
    console.log(resultado); // imprime `Infinity` porque a divisão por zero em JavaScript não gera um erro, mas sim um valor especial que representa infinito.
}
catch (error) {
    console.log("Ocorreu um erro: " + error.message); // este bloco não será executado, pois não há um erro real.
}
finally {
    console.log("Este bloco será executado independentemente de um erro ter ocorrido ou não."); // este bloco será executado.
}

/* o bloco `try` é usado para envolver o código que pode gerar um erro, enquanto o bloco `catch` é usado para lidar com o erro caso ele ocorra.
O bloco `finally` é opcional e é executado independentemente de um erro ter ocorrido ou não, o que torna útil para liberar recursos ou executar código de limpeza,
mesmo que um erro tenha sido lançado e não tratado.
*/

// exemplo de throw
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Erro: Divisão por zero não é permitida."); /* o comando `throw` é usado para lançar uma exceção personalizada quando b é igual a 0, indicando
                                                                        que a divisão por zero nao é permitida.*/
    }
    return a / b;
}

try {
    let resultadoDivisao = dividir(10, 0); // isso causará um erro, pois a divisão por zero não é permitida.
console.log(resultadoDivisao); // este código não será executado, pois a função `dividir` lançará um erro.
}
catch (error) {
    console.log(error.message); // imprime "Erro: Divisão por zero não é permitida."
}

console.log("Fim do programa");

/* o comando `throw` é útil para criar erros personalizados e fornecer mensagens de erro mais informativas, permitindo que os desenvolvedores lidem com situações específicas
de maneira mais eficaz. Ele também pode ser usado para interromper a execução de um programa quando uma condição crítica é atendida, garantindo que o erro seja tratado
adequadamente em um bloco `catch` ou que o programa seja encerrado de forma controlada.
*/
