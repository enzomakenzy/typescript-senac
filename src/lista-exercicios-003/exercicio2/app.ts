import { ItemCatalogo } from "./interfaces/IItemCatalogo";
import { Eletronico } from "./interfaces/IEletronico";
import { Vestuario } from "./interfaces/IVestuario";
import { CatalogoGenerico } from "./models/CatalogoGenerico";

const eletronico1: Eletronico = { id: 1, nome: "Monitor 27 Polegadas", marca: "LG", preco: 800};
const eletronico2: Eletronico = { id: 2, nome: "PlayStation 5", marca: "Sony", preco: 3800};
const eletronico3: Eletronico = { id: 3, nome: "Iphone 16", marca: "Apple", preco: 4769.11 };
const eletronico4: Eletronico = { id: 4, nome: "Smart TV 55 Polegadas", marca: "Samsung", preco: 3200 };
const eletronico5: Eletronico = { id: 5, nome: "Notebook Gamer", marca: "Dell", preco: 6200 };
const eletronico6: Eletronico = { id: 6, nome: "Fone Bluetooth", marca: "JBL", preco: 399.90 };

const vestuario1: Vestuario = { id: 1, nome: "Calça Cargo", tamanho: "M", preco: 150 };
const vestuario2: Vestuario = { id: 2, nome: "Camiseta Oversized", tamanho: "G", preco: 89.99 };
const vestuario3: Vestuario = { id: 3, nome: "Jaqueta Jeans", tamanho: "GG", preco: 219.90 };
const vestuario4: Vestuario = { id: 4, nome: "Tênis Esportivo", tamanho: "42", preco: 299.99 };
const vestuario5: Vestuario = { id: 5, nome: "Blusa de Moletom", tamanho: "P", preco: 159.50 };
const vestuario6: Vestuario = { id: 6, nome: "Bermuda de Sarja", tamanho: "M", preco: 120 };

const CatalogoEletronico = new CatalogoGenerico();
const CatalogoVestuario = new CatalogoGenerico();

CatalogoEletronico.adicionarProduto(eletronico1);
CatalogoEletronico.adicionarProduto(eletronico2);
CatalogoEletronico.adicionarProduto(eletronico3);
CatalogoEletronico.adicionarProduto(eletronico4);
CatalogoEletronico.adicionarProduto(eletronico5);
CatalogoEletronico.adicionarProduto(eletronico6);

CatalogoVestuario.adicionarProduto(vestuario1);
CatalogoVestuario.adicionarProduto(vestuario2);
CatalogoVestuario.adicionarProduto(vestuario3);
CatalogoVestuario.adicionarProduto(vestuario4);
CatalogoVestuario.adicionarProduto(vestuario5);
CatalogoVestuario.adicionarProduto(vestuario6);

console.log(CatalogoEletronico.listarProdutos());
console.log("");
console.log(CatalogoVestuario.listarProdutos());

console.log(CatalogoEletronico.buscarNome("oo")); // como resposta vem notebook e fone bluetooth
console.log(CatalogoVestuario.buscarNome("Ca")); // como resposta vem calça cargo e camisa oversized