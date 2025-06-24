type StatusPedido = "pendente" | "processando" | "concluido" | "cancelado";

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

enum PrioridadeEnvio {
  Baixa = 1,
  Media = 2,
  Alta = 3
}

function exibirDetalhesPedido(produto: Produto, status: StatusPedido, prioridade: PrioridadeEnvio) {
  console.log("Detalhes do pedido:");
  console.log(`Produto ID: ${produto.id}`);
  console.log(`Nome do produto: ${produto.nome}`);
  console.log(`Preço: ${produto.preco}`);
  console.log(`Status do Pedido: ${status}`);
  console.log(`Prioridade de Envio: ${prioridade}`);
}

exibirDetalhesPedido({id: 101, nome: "Camiseta", preco: 29.99}, "processando", 2)