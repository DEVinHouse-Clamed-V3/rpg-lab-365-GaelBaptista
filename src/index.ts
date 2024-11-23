import Arma from "./classes/Arma";
import Personagem from "./classes/Personagem";

const espada = new Arma(
  "espada Arcana",
  "a história desa arma é chata, pode pular"
);

const meuPersonagem = new Personagem("Gael", 300, 50);
meuPersonagem.setArma(espada);

console.log("Nome", meuPersonagem.getNome());
console.log("Força", meuPersonagem.getForça());

console.log("Arma", meuPersonagem.getArma());

meuPersonagem.receberDano(10);

console.log(meuPersonagem.getVida());

meuPersonagem.equiparArma(espada);
