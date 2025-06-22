function example(ex: string | string[]) {
  if (typeof ex === "string") {
    console.log(ex.length)
  } else {
    let sumOfLengthItems: number = 0;

    ex.forEach((item, index) => {
      if (index === 0) {
        console.log(`O tamanho do primeiro elemento é: ${item.length}`)
      }
      
      sumOfLengthItems = sumOfLengthItems + item.length;
    })
    console.log(`A soma do comprimento das strings no array é de: ${sumOfLengthItems}`);
  }
}

example("Enzo");
example(["Batata", "Enzo", "Typescript"]);
