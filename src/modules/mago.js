import { Personagem } from './personagem.js';

export class Mago extends Personagem {
    // mago extende de Personagem
    elementoMagico
    levelMagico
    inteligencia
    static tipo = "Mago"
    static descricao = "O mago é implacável!"
    //propriedade fora do constructor nao precisam do this

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome) // vem do construtor Personagem
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
        // O constructor depende do this para funcionar
    }
    obterInsignia() {

        if(this.levelMagico >=5 && this.inteligencia>=5 && this.levelMagico <10 && this.inteligencia <10){
            return `Mestre do ${this.elementoMagico}`
        }else if(this.levelMagico >=10 && this.inteligencia>=10 && this.levelMagico <20 && this.inteligencia <20){
            return `Super Mestre do ${this.elementoMagico}`
        } else if(this.levelMagico >20 && this.inteligencia>20){
            return `Mestre Supremo do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
}