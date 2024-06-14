import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    destreza
    static tipo = "Arqueiro"
    static descricao = "Você tem o meu arco!"

    constructor(nome, destreza) {
        super(nome)
        this.destreza = destreza
    }

    obterInsignia() {
        if(this.destreza >=5 && this.destreza <10) {
            return `${this.tipo} veloz`
        }else if(this.destreza > 10) {
            return `${this.constructor.tipo} Mestre`
        }
        return super.obterInsignia()
    }
}
