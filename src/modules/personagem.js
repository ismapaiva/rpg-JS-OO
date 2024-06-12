// a partir de uma classe, varios objetos podem ser criados
export class Personagem{
    nome
    vida
    mana
    level
    tipo

    constructor(nome, vida, mana, level, tipo){
        this.nome = nome
        this.vida = 100
        this.mana = 100
        this.level = level
        this.tipo = tipo
        
    }
    obterInsignia(){ // método/funçao criado dentro de um objeto, nao preciso declarar a funçao com a palavra 'function'
        if(this.level >= 5 && this.level <10){
            return `Implacavel ${this.tipo}`
        } else if(this.level >= 10){
            return `Super Implacavel ${this.tipo}`
        } else{
            return `${this.tipo} iniciante`
        }
    }
}