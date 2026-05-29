## Hash - elementos duplicados

Raramente em exercícios de leetcode será resolvido apenas com um hashmap

**Elementos duplicados** é um dos exemplos desses exercícios

### Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Primeiro pensamento é sempre: “Consigo resolver isso com brute force?”

Nesse caso daria para fazer um brute force. Com um for loop dentro de outro for loop daria, com [i] e [j], aquela iteração toda etc. Porém, o custo disso é que a complexidade logarítmica seja O (n²), o que não é razoável, da para diminuir a complexidade temporal dele, de runtime.

### Solução

Inicializamos um único ponteiro (invés de 2)

Inicializamos um hashmap vazio / set

Por que hashmap ou set? R: porque hashmap ou set tem o tempo de encontrar um elemento em O (1)

Para cada vez que o ponteiro em um elemento do array precisa salvar isso dentro do hashmap/set, caso esse elemento ainda não exista dentro do hashmap/set salva como = 1; caso ele já exista salva ele com ++ pra acrescentar + 1 no value.

Ao fim, o exercício pede para retornar true caso algum dos valores aparece pelo menos 2x no array, e para retornar falso caso todos os elementos são diferentes um do outros.