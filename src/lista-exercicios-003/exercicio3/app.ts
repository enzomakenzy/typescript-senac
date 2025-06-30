import { processarDados } from "./utils/dataProcessor";

const dadosRecebidos: any[] = [
  {
    id: 1,
    nome: "Enzo",
    email: "enzo@email.com"
  },
  {
    id: 8,
    produtoId: "dadsdsadas",
    valor: 20
  },
  {
    id: 3,
    descricao: "Algo"
  }
] 

processarDados(dadosRecebidos);