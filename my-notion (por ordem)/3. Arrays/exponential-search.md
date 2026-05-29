## Exponential search

**Exponential search** utiliza, em uma parte dela, binary search como parte da busca. E ela funciona de uma maneira um pouco diferente.

### Complexidade temporal

O (log n)

### Complexidade espacial

O (1)

### Explicação

A **exponential search** se trata de ir dobrando o ***ÍNDICE*** de busca dentro da estrutura até o ponteiro da **direita (R)** passar o valor a se encontrar desejado, e logo antes do ponteiro Right, o ponteiro Left está um ***índice*** atrás, causando assim um espaço de elemento entre o ponteiro L e o ponteiro R que é um sub array e dentro desse sub array sabemos que está nosso número.

Depois desse algoritmo, o resto passa a ser uma binary search padrão que já conheço — Divide o sub array na metade e vai fazendo isso até os ponteiros se R e L se encontrarem bla bla bla.