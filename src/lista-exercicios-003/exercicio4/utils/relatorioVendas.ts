import { Venda } from "../interfaces/IVenda";

export function gerarResumoVendas(vendas: Venda[]): Pick<Venda, "idVenda" | "valorTotal" | "status">[] {
  const vendasResumidas: Pick<Venda, "idVenda" | "valorTotal" | "status">[] = [];

  vendas.forEach((venda) => {
    const { clienteId, data, ...novaVenda } = venda;
    vendasResumidas.push(novaVenda);
  })

  return vendasResumidas;
}

export function atualizarStatusVenda(vendaOriginal: Venda, novoStatus: Partial<Venda>): Venda {
  const vendaAtualizada = ({ ...vendaOriginal, ...novoStatus });
  return vendaAtualizada;
}

export function registrarVenda(venda: Readonly<Venda>) {
  console.log(venda);

  /* 
    Nesse caso não é possível fazer modificações, 
    pois o Readonly aplicado como parâmetro deixa ele somente para leitura e nada mais, 
    se eu tentar modificar, receberia um erro de compilação como resposta
  */
}

export function prepararVendaParaCliente(venda: Venda): Omit<Venda, "clienteId" | "status"> {
  const { clienteId, status, ...vendaResumida } =  venda;

  return vendaResumida;
}