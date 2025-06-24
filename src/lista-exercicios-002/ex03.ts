function gerarSaudacao(pessoa: { primeiroNome: string, ultimoNome?: string }): string {
  if (pessoa.ultimoNome) {
    return `Olá ${pessoa.primeiroNome} ${pessoa.ultimoNome}!`;
  } else {
    return `Olá, ${pessoa.primeiroNome}!`;
  } 
}

console.log(gerarSaudacao({primeiroNome: "Enzo", ultimoNome: "Makenzy"}));
console.log(gerarSaudacao({primeiroNome: "Enzo"}));