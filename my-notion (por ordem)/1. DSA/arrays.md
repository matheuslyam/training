## Arrays

- simples
- Incompreendidas

## 2 respostas para “O que é um array?”

Isso é um array freestyle, que num livro de programação
não será considerado um array de verdade -> array de JS é diferente de um
array para a computação.

```tsx
// Um array de "baixo nível" ou "array de javascript" (o const abaixo)
1. const arr = []; 
```

Um array, uma maneira simples de explicar, é que ele é um espaço contínuo na memória que pode ser interpretado como tendo vários elementos.

Ele comentou sobre **“array buffer”** utilizando o terminal em node para provar que um array é sim um espaço contínuo na memória para guardar vários elementos

Galego fez uma puta explicação do que é um array em baixo nível, falando sobre memória alocada, como faz a troca caso um array não possa mais alocar X espaço por falta física de espaço na memória, aí é feito uma realocação, etc., etc., etc. Mas depois, ele falou do como caralhos um array funciona em javascript, ja que o array do javascript ele é mais “permissivo”, deixando o user fazer coisas que um array “ancestral” ou “de baixo nível” não permite (que é a mudança de propriedades dentro do array).

A explicação para isso foi porque o que o javascript considera um array não é esse array de baixo nível, como Rust opera, por exemplo, mas array é na verdade um objeto.

Galego também comentou que “numa prova de DSA ou em uma entrevista de DSA, ninguém quer saber do array do javascript, mas sim do array ‘baixo nível’”. Mas no mundo real, é importante sim saber sobre o “array objeto”.

O JS, Galego mostrou que é super abstraído, isso quer dizer que pro JS conseguir fazer esse código funcionar →

```tsx
const arr = [
	1, 2, 4, "banana", [1, 2], "abacaxi", 5, 6
	];
```

existe uma caralhada de código em C++ (linguagem que o Node é feito, majoritariamente), que faz com que esse nosso uso “usual” de arrays em JS seja possível. Ou seja, um array, primordialmente falando, ele não pode ser o que é no JS, e para o JS permitir que devs façam esse “tipo de array” foi necessário um código extremamente complexo que chega a dar dor de cabeça de olhar no código do V8 (que faz rodar o JS).

O Array em JavaScript é um objeto de alto nível, abstrato e dinâmico, que **pode** conter tipos mistos. Embora a engine do JS tente otimizar arrays homogêneos usando um bloco contínuo de memória, ele não é um array tradicional estático e contíguo, sendo permissivo justamente por abstrair a complexidade do gerenciamento de memória real.