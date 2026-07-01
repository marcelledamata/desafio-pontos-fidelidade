const compras = [
  { valor: 100, categoria: "eletrônico" },
  { valor: 5, categoria: "alimento" },
  { valor: 50, categoria: "livro" },
  { valor: 35, categoria: "alimento" },
];
let totalPontos = 0;
for (let compra of compras) {
  if (compra.valor >= 10) {
    let pontos = Math.floor(compra.valor / 10);
    if (compra.categoria === "eletronico") {
      pontos *= 3;
    } else if (compra.categoria === "livro") {
      pontos *= 2;
    }
    totalPontos += pontos;
  }
}
if (totalPontos > 100) {
  totalPontos += Math.floor(totalPontos * 0.2);
}
console.log(totalPontos);
