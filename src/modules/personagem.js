// a partir de uma classe, varios objetos podem ser criados
export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    tipo
    descricao
    //propriedade fora do constructor nao precisam do this

    constructor(nome) {
        this.nome = nome
        this.#level = 1
        // O constructor depende do this para funcionar
    }

    aumentarLevel(){
        this.level += 1
    }
    diminuirLevel(){
        this.level -=1 
    }

    get level(){
        return this.#level
    }

    set level(novoLevel){
        if(novoLevel >=1 && novoLevel <= 30){
            this.#level = novoLevel
        }
    }
    obterInsignia() { // método/funçao criado dentro de um objeto, nao preciso declarar a funçao com a palavra 'function'
        if (this.#level >= 5 && this.#level < 10) {
            return `Implacavel ${this.constructor.tipo}`
        } else if (this.#level >= 10) {
            return `Super Implacavel ${this.constructor.tipo}`
        } else if (this.#level < 5) {
            return `${this.constructor.tipo} iniciante`
        } else {
            return `${this.constructor.tipo} iniciante`
        }
    }

    // verificarVencedor é estático porque ele nao pertence a essa instancia.
    static verificarVencedor(personagem1, personagem2){
        if(personagem1.level === personagem2.level){
            return 'Empate'
        } else if(personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`
        } else{
            return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`
        }
    }
}

