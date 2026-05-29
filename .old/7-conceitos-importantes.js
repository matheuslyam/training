// 7. Conceitos importantes

// - Valor vs. referência
// - Truthy e falsy
// - Desestruturação de arrays e objetos
// - Spread e rest operators

// --- Valor vs. referência ---

/* O que são valores?
Valores são dados que podem ser armazenados em variáveis. 
Em JavaScript existem tipos de valores primitivos e não primitivos.
Os valores primitivos são: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
Os valores não primitivos são: Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Symbol

Os valores primitivos são imutáveis, ou seja, não podem ser modificados.
Os valores não primitivos são mutáveis, ou seja, podem ser modificados.

Os valores primitivos são passados por valor.
Os valores não primitivos são passados por referência.
*/

// Todos os exemplos de valores primitivos:
console.log("--- Valores Primitivos ---");

// String
const nome = 'Lyam';
console.log(nome);
console.log(typeof nome);

// Number
const idade = 25;
console.log(idade);
console.log(typeof idade);

// Boolean
const isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// Null
const isNomeNull = null;
console.log(isNomeNull);
console.log(typeof isNomeNull);

// Undefined
let isNomeUndefined;
const isNomeUndefined2 = undefined;
console.log(isNomeUndefined);
console.log(typeof isNomeUndefined);
console.log(isNomeUndefined2);
console.log(typeof isNomeUndefined2);

// Symbol
const id = Symbol('id');
console.log(id);
console.log(typeof id);

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);


// Todos os exemplos de valores não primitivos:
console.log("\n--- Valores Não Primitivos ---\n");

// Object
const pessoa = {
    nome: 'Lyam',
    idade: 22,
    profissao: 'Desenvolvedor JavaScript',
    isStudent: false,
    cursos: ['Desenvolvimento Web', 'Estruturas de Dados'],
    endereco: {
        rua: 'Rua 1',
        numero: 123,
        cidade: 'Curitiba',
        estado: 'Paraná',
        pais: 'Brasil',
        cep: '12345-678'
    }
}

console.log(pessoa);
console.log(typeof pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
console.log(pessoa.isStudent);
console.log(pessoa.cursos);
console.log(pessoa.endereco);

// Array
const linguagens = ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'C#', 'C', 'PHP']
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(linguagens);
console.log(numeros);

// Function
function soma(a, b) {
    return a + b;
}

console.log(soma(3, 3));
console.log(typeof soma);

// Map
const mapa = new Map(); // o que o "new" faz? R: o new é usado para criar uma nova instância de um objeto. o que é uma instância? uma instância é uma cópia de um objeto. O que é um objeto? Um objeto é uma coleção de chave-valor.
mapa.set('Nome', 'Lyam');
mapa.set('idade', '23');
mapa.set('profissao', 'desenvolvedor');

console.log(mapa.has('Nome'));
console.log(mapa.has('idade'));
console.log(mapa.has('profissao'));

console.log(mapa.get('Nome'));
console.log(mapa.get('idade'));
console.log(mapa.get('profissao'));

// Set
const set = new Set();
set.add('Lyam');
set.add('Lyam');
set.add('Lyam');
console.log(set);
console.log(typeof set);