## Lifo

Last in first out | Último a entrar e primeiro a sair

### Implementação

Tecnicamente, nada impede de implementarmos uma **stack** através de um array, com um ponteiro indicando onde está cada item.

Essa implementação de array, embora ela seja O(1) no pop e no append (pop ou put), que são os métodos da **stack** que queremos implementar, ela não garante que nossa stack possa crescer infinitamente.

E isso é uma propriedade que tradicionalmente queremos respeitar (a propriedade de poder crescer infinitamente).

Mas tradicionalmente não é assim que uma **stack** é implementada.

Definitivamente podemos fazer uma implementação de uma stack em **linked lists.**