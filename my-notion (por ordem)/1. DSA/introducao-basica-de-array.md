### Arrays

- O que são arrays:
Arrays são estruturas de dados que permitem armazenar uma coleção de valores em uma única variável. Eles são indexados por números inteiros, começando em 0.
- O que um array me permite fazer:
    - Adicionar itens
    - Remover itens
    - Ordenar itens
    - Iterar sobre os itens
    - Armazenar valores heterogêneos (strings, numbers, objects, arrays, etc.)
    - Pode ser criado de forma dinâmica (tamanho varia conforme necessidade)
    - Pode ser criado dentro de objetos.
    - É uma estrutura de dados linear, o que significa que seus elementos são armazenados em uma sequência ordenada. E geralmente o tamanho é fixo.
    - Pode ser criado dentro de outros arrays.
        
        Exemplos:
        const arr = [1, 2, 3];
        console.log(arr);
        
        arr.pop(); // o pop tira o ultimo item do array
        console.log(arr);
        
        arr.push(4); // adiciona o item na ultima posição do array
        console.log(arr);
        
        arr.shift(); // retira o primeiro item do array
        console.log(arr);
        
        arr.unshift(0); // insere o item na primeira posição do array
        console.log(arr);
        
        arr.sort(); // ordena o array (do menor para o maior)
        console.log(arr);
        
        arr.reverse(); // inverte a ordem do array
        console.log(arr);
        
        arr.length; // retorna o tamanho do array
        console.log(arr.length);
        
        arr.splice(1, 1); // remove um item do array
        console.log(arr);
        
        arr.splice(1, 1, 5); // remove um item do array e adiciona um item no lugar
        console.log(arr);
        
        arr.slice(1, 1); // retorna um novo array com um item do array
        console.log(arr);
        
    
    ### Útil
    
    No js, por exemplo, é permitido criar um array com valores em string “ ” misturando com numbers. O que é diferente em Rust, que só pode ser um array de um ou outro elemento, nunca um mix (isso é pensado por conta da garantia da boa performance)
    
    ```tsx
    let arr = [1, 2, "a", 3];
    ```
    
    cada elemento desse array é acessado por um índice, que indica a posição de cada elemento. E como bem sabe, a contagem de elementos começa em 0, e não em 1 → O **primeiro** elemento, que representa o “1” nesse exemplo, está no i (índice) 0.