// 0.2-typescript.ts
var produtos = [
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
  { nome: "Pizza de confeti", preco: 50 }
];
var produtos40Acima = [];
for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  if (produto.preco >= 40) {
    produtos40Acima.push(produto);
  }
}
var produtos30Acima = produtos.filter((produto) => {
  return produto.preco >= 30;
});
console.log(produtos30Acima);
