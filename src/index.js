import { PersonagemView } from "./components/personagem-view.js";
import { Personagem } from "./modules/personagem.js";
import { Mago} from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";



//mago : nome, elementoMagico, levelmagico, inteligencia
const magoMano = new Mago('Mano', 'fogo', 4, 3);
const magaVick = new Mago('Vick', 'gelo', 7, 10);
const magoRick = new Mago('Rick', 'Fogo', 12, 12);

//guerreiro: nome, forca
const guerreiroBob = new Guerreiro('Bob', 4)
const guerreiroRub = new Guerreiro('Rub', 8)
const guerreiroForce = new Guerreiro('Force', 12)

//arqueiro: nome, destreza
const arqueiroIsma = new Arqueiro('Isma', 12)
const arqueiroBick = new Arqueiro('Bick', 4)

//arqueiro-mago: nome, destreza, elementomagico, levelmagico, inteligencia
const magoArqueiroChico = new ArqueiroMago('Isma Paiva',12, "Fogo", 22,22)

const personagens = [magoMano, magaVick, , magoRick,arqueiroIsma, arqueiroBick, magoArqueiroChico,guerreiroBob, guerreiroRub,guerreiroForce]

new PersonagemView(personagens).render() // enviar para a classe personagemView 

// console.log(Personagem.verificarVencedor(magaVick,magoMano ))
console.log(arqueiroBick)
