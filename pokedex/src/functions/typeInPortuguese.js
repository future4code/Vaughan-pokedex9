export const typeInPortuguese = (type) => {
    switch (type) {
        case "normal":
            return "Normal"
        case "fire":
            return "Fogo"
        case "water":
            return "Água"
        case "grass":
            return "Grama"
        case "flying":
            return "Voador"
        case "fighting": 
            return "Lutador"
        case "poison": 
            return "Veneno"
        case "electric":
            return "Elétrico"
        case "ground":
            return "Terra"
        case "rock": 
            return "Pedra"
        case "psychic":
            return "Psíquico"
        case "ice":
            return "Gelo"
        case "bug":
            return "Inseto"
        case "ghost":
            return "Fantasma"
        case "steel":
            return "Ferro"
        case "dragon":
            return "Dragão"
        case "dark":
            return "Sombrio"
        case "fairy":
            return "Fada"
        default:
            return "Normal"
    }
};