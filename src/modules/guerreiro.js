import { Personagem } from './personagem.js';

export class Guerreiro extends Personagem{
    forca
    static tipo = "Guerreiro"
    static descricao = "Você será esmagado pela fúria do Guerreiro!"

    constructor(nome, forca){
        super(nome)
        this.forca = forca
    }

    obterInsignia(){
        if(this.forca < 5){
            return super.obterInsignia()
        } else if(this.forca >=5 && this.forca <10){
            return `${this.constructor.tipo} Forte`
        } else{
            return `${this.constructor.tipo} Mestre`
        }
    }
}