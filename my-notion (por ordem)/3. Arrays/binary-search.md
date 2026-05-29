## Binary search

é um dos algoritmos mais clássicos da computação, bastante simples de entender e bastante utilizado

**Binary search** não existe uma estrutura específica sobre a qual ele precisa ser aplicado. Ele pode ser usado num array, num binary tree. Porém, um **Binary search** só vai funcionar se os itens estiverem ordenados.

Em termos de Big O notation, a **complexidade temporal** é O (log n) e a **complexidade espacial** é O (1)

### Entendendo como funciona

```markdown
### Array

[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

O algoritmo começa pegando o meio do array (ou outra estrutura) e divide a estrutura em dois. 

Suponhamos que queremos encontrar o elemento 3 no array. O meio desse array é o 5, logo, depois
de encontrar o elemento central da estrutura, nesse caso o array, tem que se perguntar se o número
alvo, o número que quer ser encontrado é menor < ou maior > do que o elemento cujo o ponteiro está
(nesse caso, o ponteiro ainda está no meio do array que é onde o algoritimo começou).

Logo, exclui tudo que está a direita do array (do 5 a diante) e ficamos só com o que está a esquerda
(do 4 para trás).

O ponteiro então vai sair do meio do array onde estava antes e vai ir pro próximo meio. 
Isso quer dizer que, como só sobrou o lado esquerdo do array, e nesse lado tem o [1, 2, 3, 4], então
o proximo meio é o 3 OU o 4 (depende da implementação, mas tem que ser um dos dois). Nesse caso,
encontramos nosso número procurado (3).

### Por que é O (log n)

Justamente porque quando o input é dobrado (x2), não é dobrado o número de steps até o algoritmo encontrar o target (número alvo). 

Tem um array com 9 elementos? vai levar 2 passos; dobrando de 9 pra 18, não vai levar 4 passos, mas sim 3 passos.

Em outras palavras, Se o input é dobrado, o output é linear