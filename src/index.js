import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";

const personagemMano = new Personagem("Mano", 7, 5, 5,"Mago")
const personagemVick = new Personagem("Vick", 7, 8, 11, "Arqueiro")

const personagens = [personagemMano, personagemVick]

new PersonagemView(personagens).render() // enviar para a classe personagemView