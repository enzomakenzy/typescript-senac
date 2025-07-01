import { Venda } from "./interfaces/IVenda";
import { gerarResumoVendas } from "./utils/relatorioVendas";
import { atualizarStatusVenda } from "./utils/relatorioVendas";
import { registrarVenda } from "./utils/relatorioVendas";
import { prepararVendaParaCliente } from "./utils/relatorioVendas";

const venda1: Venda = {
  idVenda: "v001",
  data: "2025-07-01",
  valorTotal: 150.00,
  clienteId: "c123",
  status: "pendente",
};

const venda2: Venda = {
  idVenda: "v002",
  data: "2025-06-28",
  valorTotal: 299.90,
  clienteId: "c456",
  status: "concluida",
};

const venda3: Venda = {
  idVenda: "v003",
  data: "2025-06-25",
  valorTotal: 89.50,
  clienteId: "c789",
  status: "cancelada",
};

const venda4: Venda = {
  idVenda: "v004",
  data: "2025-07-01",
  valorTotal: 499.99,
  clienteId: "c123",
  status: "concluida",
};

const venda5: Venda = {
  idVenda: "v005",
  data: "2025-06-30",
  valorTotal: 129.99,
  clienteId: "c999",
  status: "pendente" ,
};

const vendas: Venda[] = [venda1, venda2, venda3, venda4, venda5];

console.log(gerarResumoVendas(vendas));

console.log(atualizarStatusVenda(venda1, { status: "concluida" }))

registrarVenda(venda3);

console.log(prepararVendaParaCliente(venda5));