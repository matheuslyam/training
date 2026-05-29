// 6. Arrays e Objetos

/* 
- Criar e manipular arrays
- Metodos de array avançados (`push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`, etc.)
- Criar e manipular objetos (propriedades, métodos, `this`, etc.)
- Acessar e modificar propriedades de objetos
- Iterar sobre objetos e arrays (for...in, for...of, etc.)
*/

/* --- Vocabulário ---

- push: Adiciona um elemento ao final do array
- pop: Remove o ultimo elemento do array
- shift: Remove o primeiro elemento do array
- unshift: Adiciona um elemento no inicio do array
- map: Cria um novo array com base em um array existente
- filter: Cria um novo array com base em um array existente
- reduce: Cria um novo array com base em um array existente
- this: Referencia o objeto que executou a função
- for...in: Itera sobre as propriedades de um objeto
- for...of: Itera sobre os elementos de um array

*/

// --- Arrays ---

// Exemplo de array de numeros
const numeros = [1, 2, 3, 4, 5, 9];
console.log(numeros);

// Exemplo de array de strings
const nomes = ["Kettlin, Adriele, Lyam"];
console.log(nomes);

// Exemplo de array de objetos
const pessoas = [
    { nome: "Kettlin", idade: 26 },
    { nome: "Adriele", idade: 24 },
    { nome: "Lyam", idade: 23 },
]
console.log(pessoas);

// Exemplo de array de funções
const funcoes = [
    function () { console.log("Função 1"); },
    function () { console.log("Função 2"); },
    function () { console.log("Função 3"); },
]
console.log(funcoes[2]);
console.log(funcoes[1]);
console.log(funcoes[0]);

// Exemplo de array de arrays
const arrays = [
    [1, 2, 3],
    [10, 20, 30, 40],
    [100, 200, 300, 400, 500],
]
console.log(arrays);

// Exemplo de array de objetos com funções
const pessoasComFuncoes = [
    { nome: "Kettlin", idade: 26, funcao: function () { console.log("Função Kettlin") } },
    { nome: "Adriele", idade: 24, funcao: function () { console.log("Função Adriele") } },
    { nome: "Lyam", idade: 23, funcao: function () { console.log("Função Lyam") } },
]
console.log(pessoasComFuncoes[0].nome); // o ".nome" faz com que o console.log pegue só o nome da pessoa, diferente das outras linhas que mostram todos os objetos.
console.log(pessoasComFuncoes[1].nome);
console.log(pessoasComFuncoes[2].nome);

console.log(pessoasComFuncoes[0].nome);
console.log(pessoasComFuncoes[1].nome, pessoasComFuncoes[1].idade);
console.log(pessoasComFuncoes[2].nome, pessoasComFuncoes[2].idade, pessoasComFuncoes[2].funcao);

// | --- | --- |

// --- Métodos de array avançados ---

/* - Metodos de array avançados (`push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`, etc.)

// - `push`: Adiciona um elemento ao final do array
// - `pop`: Remove o último elemento do array
// - `shift`: Remove o primeiro elemento do array
// - `unshift`: Adiciona um elemento no início do array
// - `map`: Chama uma função para cada elemento do array, transformando e criando um novo array com os resultados.
// - `filter`: Retorna um novo array com os elementos que passaram em um teste
// - `reduce`: Chama a função de callback uma vez para cada elemento do array, resultando em um único valor de retorno.

*/

const frutas = ["Banana", "Maçã", "Uva"];
console.log(frutas);

// `push`: Adiciona um elemento ao final do array
frutas.push("Laranja");
console.log(frutas);

// `pop`: Remove o último elemento do array
frutas.pop();
console.log(frutas);

// `shift`: Remove o primeiro elemento do array
frutas.shift();
console.log(frutas);

// `unshift`: Adiciona um elemento no início do array
frutas.unshift("Abacaxi");
console.log(frutas);

// `map`: Chama uma função para cada elemento do array, transformando e criando um novo array com os resultados.

const numerosDobrados = numeros.map(function (numero) {                         // Declarei a variavel numerosDobrados, utilizei o map e passei uma função como parametro. A função recebe um numero como parametro e retorna o dobro desse numero.
    return numero * 2;                                                          // o numero é multiplicado por 2 e o resultado é retornado.
});                                                                             // o map percorre o array numeros e aplica a função numero * 2 em cada elemento.
console.log(numerosDobrados);                                                   // o console.log irá mostrar o array com os numeros dobrados.


// `filter`: Retorna um novo array com os elementos que passaram em um teste

const numerosPares = numeros.filter(function (numero) {                         // Declarei a variavel numerosPares, utilizei o filter e passei uma função como parametro. A função recebe um numero como parametro e retorna o dobro desse numero.
    return numero % 2 == 0;                                                     // o numero é multiplicado por 2 e o resultado é retornado.
});                                                                             // o filter percorre o array numeros e aplica a função numero % 2 == 0 em cada elemento.
console.log(numerosPares);                                                      // o console.log irá mostrar o array com os numeros pares.


// `reduce`: Chama a função de callback uma vez para cada elemento do array, resultando em um único valor de retorno.

const numerosSomados = numeros.reduce(function (acumulador, numero) {           // Declarei a variavel numerosSomados, utilizei o reduce e passei uma função como parametro. A função recebe um acumulador e um numero como parametro e retorna o acumulador mais o numero.
    return acumulador + numero;                                                 // o acumulador é somado com o numero e o resultado é retornado.
}, 0);                                                                          // o reduce percorre o array numeros e aplica a função acumulador + numero em cada elemento.
console.log(numerosSomados);                                                    // o console.log irá mostrar o array com os numeros somados.

/* Perguntas:

- Da onde surgiu os parâmetros usados `numero` e `acumulador`? E o `0`? 

Resposta:

- O parâmetro `numero` é o valor atual do array que está sendo percorrido. 
- O parâmetro `acumulador` é o valor que está sendo acumulado. 
- O `0` é o valor inicial do acumulador.
*/

// | --- | --- |

// --- Criar e manipular objetos ---

/*
Criar e manipular objetos significa que vamos criar objetos e manipular suas propriedades e métodos.
*/

// Exemplo de objeto

const pessoa = {
    nome: "Kettlin",
    idade: 26,
    sobrenome: "Andreina",
    altura: 1.70,
    solteira: "Solteira",
    profissao: "Enfermeira",
    fazerAniversario: function () {
        this.idade++;
        console.log("Feliz aniversário, " + this.nome + "! Você tem " + this.idade + " anos!");
    }
}
console.log(pessoa.nome, pessoa.idade, pessoa.sobrenome, pessoa.altura, pessoa.solteira, pessoa.profissao);
pessoa.fazerAniversario();

// Como funciona o this:

/*
O `this` em JavaScript é uma palavra-chave que se refere ao objeto atual que está executando a função.
No exemplo acima, o `this` se refere ao objeto `pessoa`.
A função do `this` é fazer com que o objeto acesse suas próprias propriedades e métodos.

- Se o this estiver em um objeto, ele se refere ao objeto.
- Se o this estiver em uma função, ele se refere ao objeto pai (na maioria dos casos).
- Se o this estiver em uma função global, ele se refere ao objeto global (window).
- Se o this estiver em uma função de callback, ele se refere ao objeto pai.
*/

// | --- | --- |

// --- Iterar sobre objetos e arrays (for...in, for...of, etc.) ---

/*
O for...in é usado para iterar sobre as propriedades de um objeto. ex: for (const chave in objeto) { console.log(chave, objeto[chave]); }
O for...of é usado para iterar sobre os valores de um array. ex: for (const valor of array) { console.log(valor); }
O forEach é usado para iterar sobre os elementos de um array. ex: array.forEach(function (valor) { console.log(valor); });
*/

// Como funciona:

const objeta = {
    nome: "Kettlin",
    idade: 26,
    sobrenome: "Andreina",
    altura: 1.70,
    solteira: true,
    profissao: "Enfermeira"
}

for (const chave in objeta) {
    console.log(chave + ": " + objeta[chave]);
}

const array = [10, 20, 30, 40, 50];

for (const valor of array) {
    console.log(valor);
}

array.forEach(function (valor) {
    console.log(valor);
})

array.forEach(function (valor, indice) {
    console.log(valor, indice);
})