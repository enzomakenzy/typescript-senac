function processarDados(nome: string, idades: number[]) {
  console.log(`Olá, ${nome.toUpperCase()}`);
  
  let somaIdades = 0;

  idades.forEach((idade, index) => {
    if (index === 0 && (idade % 2 !== 0)) {
      console.log("A primeira idade é ímpar");
    }

    somaIdades += idade;
  })

  console.log(`A soma das idades é de: ${somaIdades}`);
}

processarDados("Enzo", [3, 2, 2, 2, 2]);