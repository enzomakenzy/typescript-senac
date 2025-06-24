function processarID(id: number | string) {
  if (typeof id === "string") {
    console.log(`Seu id ${id} em minúsculas: ${id.toLowerCase()}`);
  } else {
    console.log(`Seu ID ${id} multiplicado por 2: é ${id * 2}`);
  }
}

processarID("ABC123DEF");
processarID(20);

const nomes = ["João", "Maria", "Lúcia"];

nomes.forEach((nome) => {
  console.log(nome.toUpperCase());
})