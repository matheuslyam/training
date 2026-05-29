## B-Tree

É um tipo de **estrutura de dados** das mais difíceis de entender e das mais complexas de implementar

Uma **B-Tree** é essencialmente uma árvore, auto balanceavel e que vai seguir uma série de regrinhas.

Uma B-Tree (Árvore B) se auto-balanceia **constantemente e automaticamente durante todas as operações de inserção e remoção para garantir que todos os nós folha permaneçam no mesmo nível**.

### Principais regrinhas

Primeiro vai definir o número de chaves e o número de keys da **B-Tree**

E ela se auto balanceia constantemente e automaticamente durante todas as operações de inserção e remoção para garantir que todos os nodes permaneçam no mesmo nível.

### Explicando um pouco mais detalhado (Google)

O balanceamento não é um processo separado, mas sim uma consequência da estrutura da árvore, que segue regras rígidas de preenchimento de nós:

**Inserção (Split):** Quando uma inserção excede o número máximo de chaves permitidas em um nó (fator de ramificação), o nó se divide (**split**) em dois. A chave mediana é movida para o nó pai, o que pode propagar a divisão até a raiz, aumentando a altura da árvore de forma uniforme.

**Remoção (Merge/Redistribuição):** Quando uma remoção faz com que um nó fique com menos de chaves mínimas (geralmente \(M/2\)), ele se auto-balanceia por meio de fusão (**merge**) com um nó vizinho ou por redistribuição de chaves entre nós irmãos.

### Principais características do balanceamento

**Todos os nós folha no mesmo nível:** A árvore é perfeitamente balanceada.

**Altura Logarítmica:** A altura da árvore é mantida em \(O(\log n)\), garantindo alta eficiência na busca, inserção e remoção.

**Uso em Bancos de Dados:** Essencial para SGBDs, mantendo a performance mesmo com grandes volumes de dados.