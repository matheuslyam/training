type Produto = {
    nome: string;
    preco: number;
};

const produtos: Produto[] = [
    { nome: "Pizza de mussarela", preco: 20 },
    { nome: "Pizza de calabresa", preco: 25 },
    { nome: "Pizza de quatro queijos", preco: 30 },
    { nome: "Pizza de frango com catupiry", preco: 35 },
    { nome: "Pizza de brigadeiro", preco: 25 },
    { nome: "Pizza doce", preco: 28 },
    { nome: "Pizza de banana com canela", preco: 32 },
    { nome: "Pizza de chocolate", preco: 35 },
    { nome: "Pizza de morango", preco: 38 },
    { nome: "Pizza de limao", preco: 32 },
    { nome: "Pizza de abacaxi", preco: 30 },
    { nome: "Pizza de m&m", preco: 40 },
    { nome: "Pizza de paçoca", preco: 45 },
    { nome: "Pizza de confeti", preco: 50 },
]

const produtos40Acima = []; // "cannot redeclare block-scoped variable 'produtos40Acima'." acontece porque eu já declarei essa variável antes, lá em 
for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    if (produto!.preco >= 40) { // o "!" serve para garantir que o produto existe, é uma forma de dizer para o typescript que ele existe e não é null ou undefined
        produtos40Acima.push(produto);
    }
}

// console.log(produtos40Acima)

// Só que existe uma forma melhor de fazer isso, usando o filter

const produtos30Acima = produtos.filter(produto => {
    return produto!.preco >= 30;
})

console.log(produtos30Acima);

export { }