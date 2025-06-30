interface DadosBase {
  id: any;
}

interface DadosUsuario {
  nome: string;
  email: string;
}

interface DadosProduto {
  produtoId: string;
  valor: number;
}

type UsuarioCompleto = DadosBase & DadosUsuario;

type ItemPedido = DadosBase & DadosProduto;


export { DadosBase, DadosProduto, DadosUsuario, UsuarioCompleto, ItemPedido };