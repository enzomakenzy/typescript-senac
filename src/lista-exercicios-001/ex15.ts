const arr: (number | string | boolean)[] = ["Enzo", 2, 103.5, true, 24.3, "Batata", "Typescript", 83, false];

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

let booleansList = arr
  .filter(item => typeof item === "boolean")
  .map((item) => {
    return item as boolean;
  })

console.log(numbersList);
console.log(charactersList);
console.log(booleansList);