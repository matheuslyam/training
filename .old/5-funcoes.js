// Criando funções completas, que utiliza várias estruturas de controle de fluxo para demonstrar seu uso em um contexto mais complexo.

// Criando uma função que verifica se um número é primo ou não, utilizando estruturas de controle de decisão e repetição.
// (ao final de cada linha de código, adicione um comentário explicando o que cada linha faz, para facilitar a compreensão do código).

function verificarPrimo(numero) { // define a função `verificarPrimo` que recebe um parâmetro `numero`.
    if (numero <= 1) { // verifica se o número é menor ou igual a 1, pois números menores ou iguais a 1 não são primos.
        return false; // retorna `false` se o número for menor ou igual a 1, indicando que não é primo.
    }
    for (let i = 2; i < numero; i++) { // inicia um loop `for` que começa em 2 e continua até o número anterior ao `numero`, para verificar se há divisores.
        if (numero % i === 0) { // verifica se o número é divisível por `i` usando o operador de módulo `%`. em pouca palavra rapidas: if = "se", ("numero") = é a variável, "%" = operador de módulo, "i" = variável de controle do loop, "===" = operador de comparação estrita, "0" = valor que indica que o número é divisível por `i`. por que "0"? porque o operador de módulo retorna o restante da divisão de `numero` por `i`. Se o resultado for 0, significa que `numero` é divisível por `i`, ou seja, não é primo. explicando de forma extremamente leiga: se o número for divisível por algum número entre 2 e `numero - 1`, então ele não é primo, porque um número primo só pode ser dividido por 1 e por ele mesmo.
            return false; // retorna `false` se o número for divisível por `i`, indicando que não é primo.
        }
    }
    return true; // retorna `true` se o número não for divisível por nenhum número entre 2 e `numero - 1`, indicando que é primo.
}
console.log(verificarPrimo(15)); // chama a função `verificarPrimo` com o argumento 15 e imprime o resultado, que é `false`, indicando que 15 não é um número primo.
console.log(verificarPrimo(17)); // chama a função `verificarPrimo` com o argumento 17 e imprime o resultado, que é `true`, indicando que 17 é um número primo.

/* é correto deixar o "console.log" fora da função? Sim, é correto deixar o `console.log` fora da função, pois isso permite que a função seja reutilizável e flexível.
Ao deixar o `console.log` fora da função, você pode chamar a função `verificarPrimo` com diferentes argumentos e imprimir os resultados conforme necessário, sem modificar a função em si.

E extremamente importante: isso promove a separação de preocupações, onde a função é responsável apenas por verificar se um número é primo, enquanto a responsabilidade de exibir o
resultado fica fora da função, permitindo maior modularidade e reutilização do código. O nome desse princípio na programação, dentro de "SOLID", é o "Single Responsibility Principle"
(Princípio da Responsabilidade Única), que afirma que uma função ou módulo deve ter apenas uma razão para mudar, ou seja, deve ser responsável por uma única tarefa ou funcionalidade.
*/

/* o código acima define uma função `verificarPrimo` que verifica se um número é primo ou não, utilizando estruturas de controle de decisão (`if`) e repetição (`for`).
A função retorna `true` se o número for primo e `false` caso contrário. O exemplo de uso da função é mostrado com a chamada `verificarPrimo(15)`, que imprime `false`, indicando que 15 não é um número primo.
*/

console.log("Fim do exemplo sobre verificação de números primos.");

// | --- | --- |

// E se eu quiser retornar uma mensagem personalizada em vez de `true` ou `false`? Você pode modificar a função para retornar mensagens personalizadas em vez de valores booleanos.
// Aqui está um exemplo de como fazer isso:

function verificarPrimoPersonalizado(numero) {
    if (numero <= 1) {
        return "O número " + numero + " não é primo, pois é menor ou igual a 1."; // retorna uma mensagem personalizada se o número for menor ou igual a 1.
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return "O número " + numero + " não é primo, pois é divisível por " + i + "."; // retorna uma mensagem personalizada se o número for divisível por `i`.
        }
    }
    return "O número " + numero + " é primo."; // retorna uma mensagem personalizada se o número for primo.
}
console.log(verificarPrimoPersonalizado(1));
console.log(verificarPrimoPersonalizado(15));
console.log(verificarPrimoPersonalizado(17));

// O que acontece se eu definir "===" com uma comparação que não seja o 0?

/* Se você definir `===` com uma comparação que não seja 0, o comportamento da função pode ser alterado dependendo do valor que você escolher para comparar.
Por exemplo, se você comparar `numero % i === 1`, a função verificará se o número é divisível por `i` com um resto de 1, o que não é uma condição válida para determinar se um número é primo ou não.
Isso pode levar a resultados incorretos, pois um número pode ser considerado primo mesmo que seja divisível por outro número, desde que o resto da divisão seja 1. 
Portanto, é importante usar a comparação correta (`=== 0`) para garantir que a função funcione corretamente e retorne os resultados esperados.
*/

console.log("Fim do exemplo sobre mensagens personalizadas e comparação com '==='.");

// | --- | --- |

// Agora, se quisermos, invés de determinar um parâmetro dentro da função, determinar um parâmetro fora da função, como por exemplo, o número a ser verificado, como podemos fazer isso?

/* Para determinar um parâmetro fora da função, você pode simplesmente passar o valor desejado como argumento ao chamar a função. 
Por exemplo, você pode definir uma variável para armazenar o número que deseja verificar e, em seguida, passar essa variável como argumento para a função `verificarPrimoPersonalizado`. 
Aqui está um exemplo de como fazer isso:
*/

let numeroParaVerificar = 29; // define uma variável para armazenar o número a ser verificado.
console.log(verificarPrimoPersonalizado(numeroParaVerificar)); // chama a função `verificarPrimoPersonalizado` com a variável `numeroParaVerificar` como argumento e imprime o resultado.

// | --- | --- |

// E se eu não quiser definir no código (hardcoded) o número a ser verificado, mas sim permitir que o usuário insira o número através de um prompt/UI?

/* Para permitir que o usuário insira o número através de um prompt, você pode usar a função `prompt()` para solicitar ao usuário que digite um número.
Aqui está um exemplo de como fazer isso:
*/

let numeroUsuario = prompt("Digite um número para verificar se é primo ou não:"); // solicita ao usuário que digite um número e armazena o valor na variável `numeroUsuario`.
console.log(verificarPrimoPersonalizado(Number(numeroUsuario))); /* chama a função `verificarPrimoPersonalizado` com o valor convertido para número usando `Number()`
                                                                    e imprime o resultado no console. A função `Number()` é usada para garantir que o valor inserido pelo
                                                                    usuário seja tratado como um número, permitindo que a função `verficarPrmoPersonalizado` funcione corretamente e retorne o resultado esperado.*/

// Com essa abordagem, o usuário pode inserir qualquer número que deseja verificar, tornando a função mais interativa e flexível.

console.log("Fim do exemplo sobre prompts e entrada de usuário.");

// | --- | --- |

// E se eu quiser criar uma função que retorne uma lista de números primos dentro de um intervalo específico, como posso fazer isso?

/* Para criar uma função que retorne uma lista de números primos dentro de um intervalo específico, você pode usar um loop para iterar sobre os números dentro do intervalo e verificar se cada número
é primo usando a função `verificarPrimo`.
Aqui está um exemplo de como fazer isso:
*/

function listarPrimos(inicio, fim) { // define a função `listarPrimos` que recebe dois parâmetros: `inicio` e `fim`, representando o intervalo de números a ser verificado.
    let primos = []; // cria um array vazio para armazenar os números primos encontrados.
    for (let i = inicio; i <= fim; i++) { // inicia um loop `for` que itera sobre os números do `inicio` ao `fim`.
        if (verificarPrimo(i)) { // verifica se o número `i` é primo usando a função `verificarPrimo`.
            primos.push(i); // se o número for primo, adiciona-o ao array `primos` usando o método `push()`.
        }
    }
    return primos; // retorna o array `primos` contendo os números primos encontrados dentro do intervalo.
}
console.log(listarPrimos(1, 5)); // chama a função `listarPrimos` com o intervalo de 1 a 30 e imprime a lista de números primos encontrados nesse intervalo.

/* Vamos agora fazer essa função completa, sem usar uma função que já existe lá em cima para verificar se um número é primo ou não, ou seja, vamos criar uma função completa que
retorne uma lista de números primos dentro de um intervalo específico, sem usar a função `verificarPrimo`:
*/

function listarPrimosCompleto(inicio, fim) {    // define a função `listarPrimos` que recebe dois parâmetros: `inicio` e `fim`, representando o intervalo de números a ser verificado.
    let primos = [];                            // cria um array vazio para armazenar os números primos encontrados.
    for (let i = inicio; i <= fim; i++) {       // inicia um loop `for` que itera sobre os números do `inicio` ao `fim`.
        if (i > 1) {                            // verifica se o número `i` é maior que 1, pois números menores ou iguais a 1 não são primos.
            let ehPrimo = true                  // assume que o número é primo até que se prove o contrário.
            for (let j = 2; j < i; j++) {       // inicia um loop `for` que itera sobre os números entre 2 e `i - 1`, para verificar se `i` é divisível por algum desses números.
                if (i % j === 0) {              // verifica se `i` é divisível por `j` usando o operador de módulo `%`, sendo 0 o valor que é a lógica que dita que `i` é divisível por `j`.
                    ehPrimo = false;            // se `i` for divisível por `j`, ele não é primo, então altera `ehPrimo` para `false` e sai do loop.
                    break;                      // sai do loop para evitar verificar outros divisores.
                }
            }
            if (ehPrimo) {                      // se `i` for primo, adiciona-o ao array `primos` usando o método `push()`.
                primos.push(i);                 // adiciona-o ao array `primos` usando o método `push()`.
            }
        }
    }
    return primos;                              // retorna o array `primos` contendo os números primos encontrados dentro do intervalo.
}
console.log(listarPrimosCompleto(200, 300));      // chama a função `listarPrimos` com o intervalo de 1 a 10 e imprime a lista de números primos encontrados nesse intervalo.

console.log("Fim do exemplo sobre listagem de números primos.");

// | --- | --- |

// Agora vamos ver como criar uma função que recebe um parâmetro e retorna o quadrado desse parâmetro.

function calcularQuadrado(numero) {
    return numero * numero;
}
console.log(calcularQuadrado(5));

// Agora com um input do número sendo dado pelo usário ficaria assim:

function calcularQuadradoPersonalizado() {
    let numero = prompt("Digite um número para calcular o seu quadrado:");
    return numero * numero;
}
console.log(calcularQuadradoPersonalizado());

console.log("Fim do exemplo sobre funções com parâmetros.");

// | --- | --- |

// Outra ideia de função para brincar. Crie uma função que recebe um parâmetro e retorna o cubo desse parâmetro.

function calcularCubo() {
    let numero = prompt("Digite um número para calcular o seu cubo:");
    return numero * numero * numero;
}
console.log(calcularCubo());

console.log("Fim do exemplo sobre funções com parâmetros.");

// | --- | --- |

/* Resumo do que foi feito, desde o começo até o fim:

- Criamos uma função chamada `verificarPrimo` que recebe um parâmetro `numero` e verifica se ele é primo ou não.
- Criamos uma função chamada `listarPrimos` que recebe dois parâmetros `inicio` e `fim` e retorna uma lista de números primos dentro do intervalo de `inicio` a `fim`.
- Criamos uma função chamada `calcularQuadrado` que recebe um parâmetro `numero` e retorna o quadrado desse parâmetro.
- Criamos uma função chamada `calcularCubo` que recebe um parâmetro `numero` e retorna o cubo desse parâmetro.

*/