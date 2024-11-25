import Arma from "./classes/Arma";
import Inimigo from "./classes/Inimigo";
import Personagem from "./classes/Personagem";

const espada = new Arma(
  "espada Arcana",
  "a história desa arma é chata, pode pular"
);

//personagem
const meuPersonagem = new Personagem("Gael", 300, 50);
meuPersonagem.setArma(espada);

const esqueleto = new Inimigo("Esquelto Escarlate", 100, 20);
//inimigo
esqueleto.equiparArma(espada);
esqueleto.atacar(meuPersonagem);

console.log(meuPersonagem.getVida());
