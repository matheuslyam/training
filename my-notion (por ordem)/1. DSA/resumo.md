# D.S.A.

## Módulo 1 — Overview das Estruturas de Dados

### Array

Espaço contíguo na memória onde itens estão inseridos.

**Exemplo:** `\[0, 3, 4, 5, 7, 1\]`

**Características:**

- **Acesso por índice:** rápido — **O(1)** (vai direto à posição correta).
- **Inserir/remover no meio:** **O(n)** (precisa deslocar itens para abrir espaço ou preencher o vazio). Talvez seja necessário mover o array inteiro, dependendo da disposição da memória.

### Hashmap

Dicionário que armazena pares **chave/valor**.

**Operações:**

- **Inserir/remover/buscar:** geralmente **O(1)** (vai direto ao compartimento certo).
- **Pior caso:** **O(n)** se muitos itens forem para o mesmo compartimento (colisões).

### Linked List (Lista Ligada)

Cada nó carrega um item e sabe quem é o próximo nó. Para percorrer os itens, você começa na **head** e vai percorrendo de nó em nó.

**Características:**

- **Inserir ou remover no início:** muito rápido — **O(1)**. Só inserir o novo item e alterar o ponteiro da *head* ou *tail*.
- **Acesso a um item específico:** lento — **O(n)**, porque você precisa passar por cada nó até chegar ao que quer.
- **Inserir ou remover no meio ou no fim:** lento — **O(n)**, porque você precisa percorrer a lista para chegar ao ponto desejado.