//Desafio — Sistema de Pontos de Fidelidade

//Uma loja online dá pontos de fidelidade aos clientes a cada compra, seguindo as regras abaixo.

//Você recebe uma lista de compras de um cliente. Cada compra tem um valor (em reais) e uma categoria ("eletronico", "alimento" ou "livro").

//Os pontos de cada compra são calculados assim:
//- A base é 1 ponto para cada R$ 10 do valor da compra (despreze o que sobrar — uma compra de R$ 29 vale 2 pontos).
//- Depois aplica-se um multiplicador conforme a categoria: "eletronico" multiplica os pontos por 3, "livro" por 2, e "alimento" mantém igual (1).
//- Compras abaixo de R$ 10 não geram pontos, independente da categoria.

//Além disso, há um bônus de fidelidade no total: se a soma final de pontos de todas as compras for maior que 100, o cliente ganha mais 20% sobre esse total (arredondado para baixo).

//Escreva um programa que calcule e imprima o total de pontos que o cliente acumulou.

//Entrada
//Uma lista com as compras do cliente, cada uma com valor e categoria. Por exemplo:
//Saída
//Um único número inteiro — o total de pontos acumulados.
//e.g 43

const compras = [
  { valor: 100, categoria: "eletronico" },
  { valor: 5, categoria: "alimento" },
  { valor: 50, categoria: "livro" },
  { valor: 35, categoria: "alimento" },
];

function calcularPontos(compras) {
  let totalPontos = 0;
  for (const compra of compras) {
    if (compra.valor < 10) {
      continue; //Compras abaixo de R$ 10 não geram pontos
    }
    let pontos = Math.floor(compra.valor / 10);
    switch (compra.categoria) {
      case "eletronico":
        pontos *= 3;
        break;
      case "livro":
        pontos *= 2;
        break;
      case "alimento":
        // Mantém os pontos como estão
        break;
    }
    totalPontos += pontos;
  }
  // Aplica o bônus de fidelidade se o total de pontos for maior que 100
  if (totalPontos > 100) {
    totalPontos += Math.floor(totalPontos * 0.2);
  }
  //Aplica o bônus de fidelidade se o total de pontos for maior que 100

  return totalPontos;
}
console.log(calcularPontos(compras)); // Saída: 43
