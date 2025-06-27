import { Publicacao } from "./Publicacao.js";

export class Livro extends Publicacao {
  autor: string;
  anoPublicacao: number;
  estaDisponivel: boolean;

  constructor(id: string, titulo: string, autor: string, anoPublicacao: number) {
    super(id, titulo)
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.estaDisponivel = true;
  }

  emprestar(): boolean {
    if (this.estaDisponivel) {
      this.estaDisponivel = false
      console.log(`O livro ${this.titulo} foi emprestado com sucesso!`);
      return true;
    } else {
      console.log(`O livro ${this.titulo} não pode ser emprestado, pois está em uso neste momento`);
      return false;
    }
  }

  devolver(): boolean {
    if (!this.estaDisponivel) {
      this.estaDisponivel = true;
      console.log(`O livro ${this.titulo} foi devolvido!`);
      return true;
    } else {
      console.log(`O livro não pode ser devolvido pois ele não foi emprestado.`);
      return false;
    }
  }
}