## Queue

Uma queue é uma fila, e uma fila é uma estrutura de dados que essencialmente segue a regra de FIFO (First in First Out). Significa que o primeiro item que entrar na fila, será o primeiro item a sair da fila.

Uma fila é uma estrutura de dados usado para fazer buffering, ou streaming de dados e.g.

### Implementação

Uma queue pode ser implementada de várias formas, mas a forma ‘text book’ (default) é a forma utilizando uma **Linked list.**

Uma queue, se corretamente implementada, ela vai manter uma referência apontando para onde é o início e também vai manter uma referência apontando para onde é o fim, mais comumente chamados de **Head** (início) e **Tail** (final).

### Dequeu

### Implementação

Se quiser implementar uma dequeu será necessário que `não` seja feito a utilização de uma linked list. 

Vamos precisar que a estrutura seja uma **Doubled linked list.** Isso porque numa dequeu nós podemos tanto inserir elementos de um lado ou do outro ou remover elementos de um lado ou do outro, não sendo necessariamente FIFO (first in first out)