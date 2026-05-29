// 4. Estrutura de Repetição

/* Falaremos aqui sobre:

- `for` loop
- `while` loop
- `do...while` loop
- `for...in` loop
- `for...of` loop
*/

// --- estruturas de repetição ---

// exemplo de for
for (let i = 0; i < 5; i++) {
    console.log(i); // imprime os números de 0 a 4
}
console.log("Fim do loop for");

// exemplo de while
let contador = 0;
while (contador < 5) {
    console.log(contador); // imprime os números de 0 a 4
    contador ++;
}
console.log("Fim do loop while");

// exemplo de do...while
let numero = 0;
do {
    console.log(numero); // imprime o número 0
    numero ++;
} while (numero < 5); // o loop `do...while` garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.
console.log("Fim do loop do...while");

// exemplo de for...in
const pessoa = {
    nome: "Joaquim",
    idade: 25
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); // imprime "nome Joaquim" e "idade 25"
}

// exemplo de for...of
const numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
    console.log(numero); // imprime os números de 1 a 5
}



