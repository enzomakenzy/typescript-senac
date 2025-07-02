export default function formatarNome(nomeCompleto: string){
  const partesDoNome = nomeCompleto.trim().split(" ");

  if (partesDoNome.length === 0) {
    return "";
  }

  const primeiroNome = partesDoNome[0].toUpperCase();

  const restoDoNome = partesDoNome.slice(1).map((nome) => {
    if (nome.length === 0) {
      return "";
    }

    return nome[0].toUpperCase() + nome.slice(1).toLowerCase();
  });

  return [ primeiroNome, ...restoDoNome ].join(" ");
} 

export function contarVogais(texto: string): number {
  const textoLista = texto.toLowerCase().split("")

  let numeroVogais: number = 0
  
  textoLista.forEach((letra) => {
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      numeroVogais++;
    }
  })

  return numeroVogais;
}