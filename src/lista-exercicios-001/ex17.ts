function example(ex: string | string[]) {
  if (typeof ex === "string") {
    return (ex as string).length
  } else {
    let sumOfLengthItems: number = 0;

    ex.forEach((item, index) => {
      if (index === 0) {
        console.log(`O tamanho do primeiro elemento é: ${(item as string).length}`)
      }
      
      sumOfLengthItems = sumOfLengthItems + item.length;
    })
    console.log(`A soma do comprimento das strings no array é de: ${sumOfLengthItems as number}`);
  }
}

console.log(`O tamanho do elemento é de: ${example("Enzo")} caracteres`);
example(["Batata", "Enzo", "Typescript"]);
