## Implementação linked lists

É super simples, provavelmente nunca precisarei implementar uma, mas é importante entender o conceito e fundamento.

Importante são os **Nodes.**

https://excalidraw.com/

---

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None  # Corrigido: era um sinal de menos (-) em vez de igual (=)
        self.prev = None
    
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        
    def add_to_front(self, value):
        # Corrigido: toda a função precisava de indentação (4 espaços para a direita)
        new_node = Node(value)
        new_node.next = self.head
        if self.head:
            self.head.prev = new_node
        else:
            self.tail = new_node
        self.head = new_node
    
    def add_to_end(self, value):
        new_node = Node(value)
        new_node.prev = self.tail
        if self.tail:
            self.tail.next = new_node  # Corrigido: era self.head.next
        else:
            self.head = new_node
        self.tail = new_node
        
    def remove_from_front(self):
        if not self.head:
            return None
        removed_value = self.head.value
        self.head = self.head.next
        if self.head:
            self.head.prev = None
        else:
            self.tail = None
        return removed_value
        
    def remove_from_end(self):  # Corrigido: recuado para alinhar com os outros métodos
        if not self.tail:  # Adicionado: validação caso a lista esteja vazia
            return None
            
        removed_value = self.tail.value  # Corrigido: pegando o valor do tail, não head
        self.tail = self.tail.prev
        
        if self.tail:
            self.tail.next = None  # Corrigido: limpando o ponteiro correto
        else:
            self.head = None
        return removed_value

# Testando o código
dll = DoublyLinkedList()

dll.add_to_front(1)
dll.add_to_front(2)
dll.add_to_front(3)

dll.add_to_end(4)
dll.add_to_end(5)

print(dll.remove_from_front())  # Saída esperada: 3
print(dll.remove_from_end())    # Saída esperada: 5
print(dll.remove_from_front())
print(dll.remove_from_end())
```