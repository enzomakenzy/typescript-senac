const arr: (number | string)[] = ["Enzo", 2, 103.5, 24.3, "Batata", "Typescript", 83];

let numbersList = arr
  .filter(item => typeof item === "number")
  .map((item) => {
  return <number>item;
})

let charactersList = arr
  .filter(item => typeof item === "string")
  .map((item) => {
  return <string>item;
})

console.log(numbersList);
console.log(charactersList);