import { DadosBase, DadosProduto, DadosUsuario, ItemPedido, UsuarioCompleto } from "../types/Dados";

export function processarDados(dados: any[]) {
  const dadosTipados: (UsuarioCompleto | ItemPedido | undefined)[] = [];
  
  dados.forEach(item => {
    if (item && typeof item.nome === "string" && typeof item.email === "string") {
      dadosTipados.push(item as UsuarioCompleto);
    } else if (item && typeof item.produtoId === "string" && typeof item.valor === "number") {
      dadosTipados.push(item as ItemPedido);
    } else {
      dadosTipados.push(undefined);
    }
  });

  dadosTipados.forEach((element, index) => {
    if (!element) {
      console.log(`O item ${index + 1} é de um tipo desconhecido`)
    } else if ("nome" in element) {
      console.log(`O item ${index + 1} é do tipo UsuarioCompleto`);
    } else {
      console.log(`O item ${index + 1} é do tipo ItemPedido`);
    }
  });
}