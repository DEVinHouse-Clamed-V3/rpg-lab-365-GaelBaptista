import Arma from "./classes/Arma";
import Inimigo from "./classes/Inimigo";
import Personagem from "./classes/Personagem";
import Npc from "./classes/Npc";
//comentarios para ajudar a discernir cada parte

// criando a arma
const espada = new Arma(
  "Espada Arcana",
  "A história dessa arma é chata, pode pular.",
  50
);
console.log(
  `Arma: ${espada.getNome()}, Dano: ${espada.getDano()}, Descrição: ${espada.getDescricao()}`
);

// criando o personagem
const meuPersonagem = new Personagem("Steban Catavento", 300, 50);
meuPersonagem.setArma(espada);
console.log(`${meuPersonagem.getNome()} equipado com: ${espada.getNome()}`);

// criando o inimigo
const esqueleto = new Inimigo("Esqueleto Escarlate", 100, 20);
esqueleto.equiparArma(espada);
console.log(`${esqueleto.getNome()} equipado com: ${espada.getNome()}`);

// criando um npc
const curandeiro = new Npc("Curandeiro Sábio");

//  aqui o nPC aplica um buff no personagem
curandeiro.buffarPersonagem(meuPersonagem);

// combate
console.log("Início do combate!");
meuPersonagem.atacarInimigo(esqueleto);
esqueleto.atacar(meuPersonagem);
meuPersonagem.atacarInimigo(esqueleto);

// exibindo vida atual do personagem e do inimigo após o combate
console.log(
  `${meuPersonagem.getNome()} tem ${meuPersonagem.getVida()} de vida restante.`
);
console.log(
  `${esqueleto.getNome()} tem ${esqueleto.getVida()} de vida restante.`
);
