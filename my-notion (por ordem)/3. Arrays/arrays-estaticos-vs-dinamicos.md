## Arrays estáticos vs dinâmicos

Um array estático está muito mais próximo de ser um ‘array de verdade’ enquanto um array dinâmico está muito mais próximo de ser uma lista ou um vetor.

### Array estático

tem que informar o tipo

`arr = [i32; 8]`

ou seja, um **array estático** vai ter um tamanho fixo ([8])

e esse tamanho fixo vai ser sabido em tempo de compilação geralmente

problemas de software geralmente tem **‘Stack’ e ‘Heap’**. geralmente, um array estático de tamanho fixo vai ser alocado na stack ou na memória estática

**característica mais importante:**

um **array estático** não pode mudar de tamanho

nesse caso vamos ter um ganho de performance, então é o motivo dele ser estático é o ganho de performance

não é possível redimensionar, então ele tem menos operações

maior segurança

menor probabilidade de causar memory leak (vazamento de memória)

**maior utilidade**

quando performance é crítica

empresas absurdamente gigantescas usando Rust, C. Kernel de sistemas operacionais, sistemas embeded

### Array dinâmico

vai ter tamanho variável

`arr = []`

esse tamanho pode variar durante a runtime

um **array dinâmico** geralmente é armazenado em heap

**característica mais importante:**

um **array dinâmico** aumenta ou diminui conforme a necessidade

e o dinâmico é o contrario, tem uma perda de performance mas um ganho de flexibilidade, já que ele pode aumentar ou diminuir conforme a necessidade

redimensionar um array dinâmico PODE ter um custo (não necessariamente vai ter), podendo custar O (n), ou seja, precisando ter que mover todos os elementos

probabilidade maior de fragmentação e memory leak

**maior utilidade**

pra maioria dos tipos de aplicações é razoável

não precisa se preocupar se o nosso javascript vai ser lento ou não, geralmente não faz sentido

tem muita flexibilidade para utilizar em quase todo tipo de sistema, pode usar sem se preocupar

e também quando não se sabe o tamanho da variável.

mesmo se dentro do kernel do linux ou uma biblioteca de muito baixo nível, ainda sim pode ser uma utilidade muito grande

deixando claro que: esse tipo de **array dinâmico** é mais comum em javascript, python, mas em Rust pode sim ter esse tipo de array, apesar do baixo nível (os chamados vector). em C++ também tem vector. 

diversas linguagens tem essas duas implementações, não é nada exclusivo de js ou py