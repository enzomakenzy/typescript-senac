import { ItemCatalogo } from "../interfaces/IItemCatalogo";

export class CatalogoGenerico<T extends ItemCatalogo> {
  produtos: T[];

  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto: T) {
    this.produtos.push(produto)
  }

  listarProdutos() {
    return this.produtos;
  }

  buscarNome(nome: string): T[] {
    return this.produtos.filter((produto) => (
      produto.nome.toLowerCase().includes(nome.trim().toLowerCase())
    ))
  }
}
