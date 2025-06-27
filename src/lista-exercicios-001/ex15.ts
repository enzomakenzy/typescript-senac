const arr: (number | string)[] = ["Enzo", 2, 103.5, 24.3, "Batata", "Typescript", 83];

let numbersList = arr
  .filter(item => typeof item === "number")
  .map((item) => {
  return item as number;
})

let charactersList = arr
  .filter(item => typeof item === "string")
  .map((item) => {
  return item as string;
})

console.log(numbersList);
console.log(charactersList);