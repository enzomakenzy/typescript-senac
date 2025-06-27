import { Livro } from "./models/Livro.js";

const livro1 = new Livro("1", "O Senhor dos Anéis", "J. R. R. Tolkien", 1954);
const livro2 = new Livro("2", "As Crônicas de Gelo e Fogo: A Guerra dos Tronos", "George. R. R. Martin", 1991);

livro1.emprestar();
livro1.emprestar();
livro1.devolver();
livro1.emprestar();
