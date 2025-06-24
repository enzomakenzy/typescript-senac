let dadosFlexiveis: any = "Olá Typescript!";

console.log(dadosFlexiveis);

dadosFlexiveis = 123;

console.log(dadosFlexiveis);

function inferirTipo(valor: any) {
  console.log(typeof valor);
}

inferirTipo("Olá!");
inferirTipo(2025);