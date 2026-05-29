## Hashmap

em python → `dictionary`

```markdown
{}.get("lyam") -> "azul"
```

Na maioria dos casos um hashmap terá uma complexidade temporal de O(¹)

> A questão é: como que conseguimos encontrar Entries no nosso array em **tempo constante**?
> 

Esse é o X da questão em hashmap. 

A mágica por trás disso é a **Hashing Function \ Hash Function.**

### Exemplo | Explicando de um jeito simples

```markdown
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Na vida real, um hashmap vai ter um array bem grande;

Uma hash function que faz uma criptografia (MD5, SHA254, etc);

Quando houver colisões, a forma de lidar com elas será armazenando os itens que colidiram em uma subestrutura de dados (pense num array menor, geralmente bem pequeno) será um array de um item dentro do array principal (quase uma lista, mas não chega a ser uma lista)

### Iterando:

Galego comentou sobre Load Factor e Colision

Colision eu abordei aqui e falei o que é e o que se faz caso uma colision aconteça (a criação da subestrutura para armazenar um item que colidiu com outro)

Load factor eu não comentei, mas **load factor** é a diferença de tamanho entre a quantidade de dados que temos e a nossa estrutura de dados.

Suponhamos que temos um array que tem um tamanho de 10 (tem o tamanho de 10 mas não ocupam 10 elementos) . Se temos um array com o tamanho de 10 elementos totais, mas dentro dele temos apenas 2 elementos existentes, significa que nosso **load factor** é de 20% ou 0,2.

E só batendo o olho desse load factor de 20% já da pra saber que uma colisão é extremamente provável, porque isso significa que também temos 20% de uma colisão acontecer.