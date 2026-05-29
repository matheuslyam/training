// 2. Fundamentos da Linguagem

// - Tipos de dados (string, number, boolean, null, undefined, object, array, function, symbol, bigint, etc.)
// - Declaração de variáveis (`var`, `let`, `const`)
// - Operadores (aritméticos, de comparação, lógicos, etc.)
// - Coercão de tipos e conversão de dados (implicita e explicita)

// --- tipos de dados ---
/*
JavaScript possui vários tipos de dados, incluindo:
- String: Representa texto, por exemplo, "Olá, mundo!".
- Number: Representa números, por exemplo, 42 ou 3.14.
- Boolean: Representa valores verdadeiros ou falsos, por exemplo, true ou false.
- Null: Representa a ausência intencional de valor, por exemplo, null.
- Undefined: Representa uma variável que foi declarada mas não inicializada, por exemplo, undefined.
- Object: Representa coleções de dados e funcionalidades, por exemplo, { nome: "Alice", idade: 30 }.
- Array: Representa uma lista ordenada de valores, por exemplo, [1, 2, 3].
- Function: Representa um bloco de código reutilizável, por exemplo, function saudacao() { console.log("Olá!"); }.
- Symbol: Representa um identificador único, por exemplo, Symbol("id").
- BigInt: Representa números inteiros muito grandes, por exemplo, 9007199254740991n.
*/

// exemplo string
let saudacao = "Olá, mundo!";

// exemplo number
let idade = 30;

// exemplo boolean
let isStudent = true; // or false
// let isStudent = false;

// exemplo null
let contaBancaria = null;

// exemplo undefined
let endereco; // variável declarada mas não inicializada (basta declarar sem atribuir um valor)

// exemplo object
let pessoa = {
  nome: "Alice",
  idade: 30,
  profissao: "Desenvolvedora"
};

// exemplo array
let numeros = [1, 2, 3, 4, 5];

// exemplo como posso usar array para armazenar objetos
let pessoas = [
  { nome: "Alice", idade: 30 },
  { nome: "Bob", idade: 25 },
  { nome: "Charlie", idade: 35 }
];

// exemplo de como seria um array de funções
let funcoes = [
  function() { console.log("Função 1"); },
  function() { console.log("Função 2"); },
  function() { console.log("Função 3"); }
];
console.log(funcoes[0]); // Imprime a função 1
console.log(funcoes[1]); // Imprime a função 2
console.log(funcoes[2]); // Imprime a função 3

/*
o console devolveu [Function (anonymous), Function (anonymous), Function (anonymous)] porque as funções são anônimas (sem nome) e o console apenas indica que são funções,
sem mostrar o conteúdo delas. Para ver o conteúdo das funções, você pode chamá-las usando os parênteses:
*/

funcoes[0]();   // Imprime "Função 1" // o papel do parênteses é chamar a função, ou seja, executar o código dentro dela. sem o parênteses, você apenas está referenciando a
// função, não executando-a.
funcoes[1]();   // Imprime "Função 2"
funcoes[2]();   // Imprime "Função 3"   

// exemplo symbol

/* o que é um symbol?
Um Symbol é um tipo de dado primitivo em JavaScript que representa um identificador único. Ele é criado usando a função Symbol() e pode ser usado para criar propriedades
de objetos que são únicas e não colidem com outras propriedades, mesmo que tenham o mesmo nome. Os Symbols são úteis para evitar conflitos de nomes em objetos e para
criar propriedades privadas.
*/

let id = Symbol("id");
console.log(id); // Imprime Symbol(id)

/* explicando de forma ainda mais simples, um Symbol é como um rótulo único que você pode usar para identificar algo de forma exclusiva. Mesmo que você crie dois
Symbols com a mesma descrição, eles serão considerados diferentes e únicos. Por exemplo:
*/

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // Imprime false porque mesmo que ambos tenham a mesma descrição "id", eles são símbolos diferentes e únicos.

// exemplo bigint

/* o que é um bigint?
BigInt é um tipo de dado primitivo em JavaScript que representa números inteiros muito grandes, além do limite do tipo Number. Ele é criado usando a função BigInt()
ou adicionando a letra "n" ao final de um número inteiro. O BigInt permite trabalhar com números inteiros que excedem o limite de 2^53 - 1, que é o maior número inteiro
seguro representável pelo tipo Number.
*/

let bigInt1 = BigInt(9007199254740991); // usando a função BigInt()
let bigInt2 = 9007199254740991n; // usando a notação com "n"
console.log(bigInt1); // Imprime 9007199254740991n
console.log(bigInt2); // Imprime 9007199254740991n

// os dois bigints são iguais, mesmo que tenham sido criados de formas diferentes
console.log(bigInt1 === bigInt2); // Imprime true porque ambos representam o mesmo valor inteiro grande.


// --- declaração de variáveis ---

/* em JavaScript, existem três formas principais de declarar variáveis: var, let e const. Cada uma tem suas próprias características e usos recomendados.

- var: É a forma mais antiga de declarar variáveis em JavaScript. As variáveis declaradas com var têm escopo de função, o que significa que elas são acessíveis em toda a
função onde foram declaradas. No entanto, var tem algumas peculiaridades, como o hoisting (as variáveis são "elevadas" para o topo do escopo) e a possibilidade de redeclaração,
o que pode levar a bugs e confusões.

- let: Introduzido no ECMAScript 2015 (ES6), let é a forma recomendada de declarar variáveis mutáveis. As variáveis declaradas com let têm escopo de bloco,
o que significa que elas são acessíveis apenas dentro do bloco onde foram declaradas (por exemplo, dentro de um loop ou de uma função).
Além disso, let não permite redeclaração dentro do mesmo escopo, o que ajuda a evitar erros.

- const: Também introduzido no ECMAScript 2015 (ES6), const é usado para declarar variáveis que não podem ser reatribuídas. As variáveis declaradas com const
também têm escopo de bloco.

No entanto, é importante notar que const não torna o valor imutável; ele apenas impede que a variável seja reatribuída a um novo valor. Se o valor for um objeto ou array,
suas propriedades ou elementos ainda podem ser modificados.
*/

// exemplo var
var nome = "Alice";
console.log(nome); // Imprime "Alice"

// exemplo let
let altura = 1.73;
console.log(altura); // Imprime 1.73

// exemplo const
const cidade = "São Paulo";
console.log(cidade); // Imprime "São Paulo"


// --- operadores de comparação, aritméticos e lógicos ---

/* JavaScript possui vários tipos de operadores, incluindo:

- Operadores aritméticos: + (adição), - (subtração), * (multiplicação), / (divisão), % (módulo), ** (exponenciação).
- Operadores de comparação: == (igualdade), === (igualdade estrita), != (diferença), !== (diferença estrita), > (maior que), < (menor que), >= (maior ou igual a), <= (menor ou igual a).
- Operadores lógicos: && (E lógico), || (OU lógico), ! (NÃO lógico).
*/

// exemplo de operadores aritméticos
let a = 10;
let b = 5;
console.log(a + b); // Imprime 15
console.log(a - b); // Imprime 5
console.log(a * b); // Imprime 50
console.log(a / b); // Imprime 2
console.log(a % b); // Imprime 0 
console.log(a ** b); // Imprime 100000

// exemplo de operadores de comparação
console.log(a == b); // Imprime false (comparação de valor)
console.log(a === b); // Imprime false (comparação de valor e tipo)
console.log(a != b); // Imprime true (comparação de valor) porque 10 é diferente de 5
console.log(a !== b); // Imprime true (comparação de valor e tipo) porque 10 é diferente de 5 e ambos são do tipo number, então a comparação de valor e tipo também é verdadeira.
console.log(a > b); // Imprime true
console.log(a < b); // Imprime false
console.log(a >= b); // Imprime true
console.log(a <= b); // Imprime false

// exemplo de operadores lógicos
let x = true;
let y = false;
console.log(x && y); // Imprime false (E lógico) porque ambos os operandos precisam ser verdadeiros para o resultado ser verdadeiro
console.log(x || y); // Imprime true (OU lógico) porque pelo menos um dos operandos é verdadeiro para o resultado ser verdadeiro
console.log(!x); // Imprime false (NÃO lógico) porque o operador de negação (!) inverte o valor lógico de x, que é true, resultando em false.
console.log(!y); // Imprime true (NÃO lógico) porque o operador de negação (!) inverte o valor lógico de y, que é false, resultando em true.


// --- coercão de tipos e conversão de dados ---

/* Coerção de tipos é o processo pelo qual JavaScript converte automaticamente um valor de um tipo para outro quando necessário.
Por exemplo, se você tentar adicionar um número a uma string, JavaScript irá converter o número em uma string antes de realizar a operação.
Conversão de dados, por outro lado, é o processo explícito de converter um valor de um tipo para outro usando funções ou métodos específicos.
*/

// exemplo de coerção de tipos
let num = 10;
let str = "5";
console.log(num + str); // Imprime "105" (coerção de tipo: o número 10 é convertido para a string "10" antes da concatenação)
console.log(num * str); // Imprime 50 (coerção de tipo: a string "5" é convertida para o número 5 antes da multiplicação)
console.log(num == str); // Imprime true (coerção de tipo: o número 10 é convertido para a string "10" antes da comparação de igualdade) | Mas no console retona false porque o número 10 não é igual à string "5", mesmo com a coerção de tipo, então a comparação de igualdade retorna false.
console.log(num === str); // Imprime false (sem coerção de tipo: o número 10 e a string "5" são de tipos diferentes, então a comparação de igualdade estrita retorna false)

// exemplo de conversão de dados
let contagem = "42";
let convertidoNumero = Number(contagem); // converte a string "42" para o número 42
console.log(convertidoNumero); // Imprime 42

let valorBooleano = "true";
let convertidoBooleano = Boolean(valorBooleano); // converte a string "true" para o valor booleano true
console.log(convertidoBooleano); // Imprime true
