## Sliding window

É um dos tipos de problemas mais populares que tem.

Geralmente conseguimos identificar uma **Sliding window** quando a solução do problema é um sub array, ou um tamanho de sub array, ou uma sub string ou um tamanho de sub string, que preenche certa condição.

```markdown
[ b c b b b c b a ]
```

Supomos, que com esse array given acima, o problema seja o seguinte: 

Encontrar o maior sub array onde as letras não podem se repetir mais de uma vez.

Esse tipo de problema é **sliding window**

Essa solução é meio que uma receita de bolo bastante previsível, sempre que identificarmos que é **sliding window** tem uma forma mais ou menos fácil de se resolver.

A solução é melhor compreendida através da aula do Galego.

Mas apenas para resumo, a solução se trata do aumento e contração de uma janela e medição dos elementos dentro dessa janela.

Procura maior frequência de um elemento, se não passar aumenta a janela, se passar contrai o ponteiro “L” diminuindo a janela e avançando no array e também avançando na busca do maior sub array onde as letrar não se repetem + de 1 vez.