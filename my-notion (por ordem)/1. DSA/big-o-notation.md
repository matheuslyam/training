## Fala sobre escalabilidade, e não necessariamente performance

Big O é uma forma de denotar desempenho do algoritmo, mas não é necessariamente uma medida de performance.

Big O é uma denotação que vai te dizer o quão bem ou quão mal um algoritmo escala dado o input.

Big O pode ser usado para medir a Complexidade Temporal e para medir a Complexidade Espacial de um alg.

### Complexidade temporal

- A complexidade temporal diz respeito ao `tempo de exececução` (runtime).
    
    Se a gente percorrer cada (each) elemento de um array uma única vez, isso é O(n).
    A nossa complexidade temporal foi O(n) porque a gente percorreu cada elemento 1x.
    

### Complexidade espacial

- A complexidade espacial diz respeito ao quanto de memória adicional precisamos alocar.
    
    No nosso caso (e.g. do vídeo) rebemos um array de input, mas independente do tamanho do array, a gente sem vai alocar um único espaço na memória. Esse espaço não vai ser alterado se o array for muito grande ou muito pequeno, a gente sempre só pode ter um item no máximo, e isso seria uma complexidade espacial O(¹)
    

---

### O(¹)

Tempo constante. Se estivermos falando de memória, significa memória constante. 

O que que seria um alg. que independente do tamanho do input tenha um mesmo tempo de execução? Isso é o que significa O(¹).

Se o array tem 1 elemento, ele vai ter um tempo X. Se o array tiver 10 elementos, ele vai ter o tempo X também. Se o array tiver 1 trilhão de elementos ele vai ter o mesmo tempo X.

### O(log n)

Dobrar o input não necessariamente dobra o runtime (tempo de execução)

Log2 (10) → 3.321456
Log2 (20) → 4.321456
Log2 (30) → 5.321456

### Binary search →

```markdown
							|	1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
```

buscando pelo elemento { 3 } (pode ser qualquer um, o 3 é exemplo), utilizando binary search, você deverá sempre pegar no meio dos números. Logo, meio de 10 é 5 = 1 operação ; meio de 5 seria 2,5 só que não tem 2,5 então pula pro número inteiro anterior, que é o 2 nesse caso = 2 operações ;  agora sobrou 2 e 3, achou o 3 na terceira operação porque se descobriu que o 2 > 3 logo se encontrou o alvo = 3 operações.

Agora, no exemplo da aula, o galego faz isso dobrado, em vez de ter 10 elementos (como no exemplo anterior), terá 20 elementos, do 1 ao 20. Só que pelo binary search, ele mostrou que apesar de DOBRAR os elementos, o tamanho da operação para se buscar um dos elementos NÃO dobrou (não foi de 3 para 6 operações totais até se encontrar o 3) mas sim levou apenas UMA operação a mais.

Isso quer dizer que → Escalou de maneira logarítmica, dobramos o tamanho do input, mas o tempo de execução (runtime) aumentou em UMA busca só.
ISSO É O (LOG N)

O(log n) é quando a gente dobrar o input, mas não necessariamente estamos dobrando o tempo de execução.

### O(n) - mais simples de entender

É temporal. Se estamos falando de complexidade temporal em O(n), seria percorrer todos os elementos de um array (0, 1, 2, 3, 4…)

O(n) escala exatamente na mesma medida que o input aumenta. Se vou levar X tempo para percorrer um array até encontrar o último elemento do meu array, se eu dobrar o input, vou levar o tempo 2X (dobro de antes) para encontrar esse elemento

**OBS → a gente sempre considera em uma análise de Big O o caso PESSIMISTA**, o pior caso de todos. Pra alguns poucos casos abrimos uma exceção e consideramos a maneira “média”.

Pessimistamente falando, pra encontrar um elemento dentro de um array, no pior dos casos deverá se percorrer o array inteiro pelo menos 1x, por isso O(n). Se dobrarmos esse array, o runtime também dobra. Por isso O(n) é o mais simples de todos, pois ele escala **`exatamente`** na mesma medida que o input aumenta.

## Falando de **espaço** agora.

### Exemplo

```markdown
Quero calcular o valor dobrado de todos os elementos de um array

[ 2, 4, 6, 8, 10 ]

Criaremos um novo array que terão os elementos

[ 4, 8, 12, 16, 20 ]
```

A questão do espaço é simples → O array novo criado a partir do anterior, ele possui exatamente a mesma quantidade de elementos que o array original, que são 5 elementos (esse é o length, ou quantidade de elementos do array). E o que foi necessário alocar de espaço na memória foi um novo array, com o mesmo tamanho do array original. Ou seja, se o input é o dobro, o espaço na memória que se deve alocar TAMBÉM é o dobro, ou seja, em termos de `complexidade espacial` também escala em O(n).

### O(n log n)

Pra decorar isso → **QUASE** todos os algs. de sorting são O (N LOG N), com exceção de bubblesorting, que nesse caso é O(n² ). Ou seja, quicksort ou mergesort, a performance média desses algs. ou a complexidade Big O que consideramos é de O (N LOG N).

Um alg. espacial com complexidade O (N LOG N) é extremamente raro, sendo normalmente um algoritmo meio mal feito pra ter isso (Augusto não soube nem dar um exemplo de cabeça para algo desse tipo).

Então, um algoritmo de complexidade temporal O (N LOG N) serão algs. de `sorting` e `divide and conquer`

Para explicar isso, é meio complexo, então em simplificação:

Supondo que o array é = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

O mergesort o Galego citou ser um excelente exemplo pra isso, porque no mergesort a parada é pegar um array (o exemplo acima que eu dei), ai pegamos o meio desse array e dividimos no meio (deixando 2 metades) e causando 2 arrays agora ; e aí pegamos esses 2 arrays menores descendentes do original e dividimos em 2, totalizando 4 arrays menores (2 virou 4) ; e apos ele se tornar um único elemento, o sorting vai acontecer ao juntar cada elemento em ordem crescente, sendo o menor dos elementos o primeiro e o último elemento o maior deles. 

### O (N²)

Fácil → É um loop dentro de um loop

```markdown
FOR i in arr:
	FOR j in arr:
```

Se tiver isso aí, tem 2 FOR aninhados dentro do mesmo array, pode cravar que é um O (N²). É só isso.

É quando ele escala numa complexidade que para cada item do array, ele checa todos os outros itens.
AAAAAAA NÃO SER que tenha algum tipo de caching, memorization, prefix sum…

### Outros exemplos (fins acadêmico, não é muito visto em interview)

- O (2^N) → extremamente raro
- O (raiz de N)
- O (N!) → Exemplo de O (N!) seria um algoritmo de fibonacchi “muito mal feita” (segundo o Galego). Mas também disse que há uma maneira de fazer fibonacchi super bem implementada.