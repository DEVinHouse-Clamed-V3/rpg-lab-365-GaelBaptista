import Personagem from "./Personagem";

export default class Npc {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  getNome() {
    return this.nome;
  }

  // método que aplica um buff aleatório ao personagem
  buffarPersonagem(personagem: Personagem): void {
    const chance = Math.random();

    if (chance < 0.5) {
      this.aumentarForça(personagem);
    } else {
      this.aumentarVida(personagem);
    }
  }

  // atributo que aumenta a força do personagem
  private aumentarForça(personagem: Personagem): void {
    const incrementoForça = 5; // aumenta a força em 5
    const novaForça = personagem.getForça() + incrementoForça;
    personagem.setForça(novaForça);

    console.log(
      `${
        this.nome
      } aumentou a força de ${personagem.getNome()} em ${incrementoForça}!`
    );
  }

  // esse atributo aumenta a vida do personagem
  private aumentarVida(personagem: Personagem): void {
    const incrementoVida = 20; // aumenta a vida em 20
    const novaVida = personagem.getVida() + incrementoVida;
    personagem.setVida(novaVida);

    console.log(
      `${
        this.nome
      } aumentou a vida de ${personagem.getNome()} em ${incrementoVida}!`
    );
  }
}
