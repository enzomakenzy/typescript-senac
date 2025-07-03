import formatarNome, { contarVogais } from "./utils/strings";
import { OperacoesMatematicas, MAX_VALOR } from "./utils/numeros";

console.log(formatarNome("Enzo Makenzy de Queiroz Bezerra"));
console.log(contarVogais("enzo"));

const numeros = [10, 25, 5, 40, 15];

const operacoes = new OperacoesMatematicas;

console.log(operacoes.somarArray(numeros));

const soma = operacoes.somarArray(numeros);

console.log(operacoes.ehPar(soma));

if (soma > MAX_VALOR) {
  console.log("Soma excede o valor máximo permitido")
} else {
  console.log("Soma dentro do limite");
}