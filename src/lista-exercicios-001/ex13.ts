function example(ex: string | number) {
  typeof ex === "string" || typeof ex === "number" ? 
  console.log("Ele é do tipo number ou string") : 
  "Ele não é de nenhum tipo" 
}