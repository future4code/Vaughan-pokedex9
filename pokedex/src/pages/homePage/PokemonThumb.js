import React from "react";
import { useNavigate } from "react-router";
import { goToPokemonDetailsPage } from "../../routes/coordinator";
import "./style.css"
import pokeball from "../../assets/pokeball.png"
import more from "../../assets/plus.png"

const PokemonThumb = ({id, name, image, type}) => {
    const navigate = useNavigate();

    const style = `thumb-container ${type}`

    const typeInPortuguese = () => {
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
    }

    return(
        <div className={style}>
            <div className="number">
                {id < 10 ? <small>#0{id}</small> : <small>#{id}</small>}
            </div>
            <img src={image} alt={name}></img>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Tipo: {typeInPortuguese()}</small>
            </div>
            <div className="buttons-card">
                <button>
                    <img src={pokeball} alt="Ícone de pokebola"/>
                    <>Adicionar Pokedex</>
                </button>
                <button onClick={() => goToPokemonDetailsPage(navigate, name)}>
                    <img className="more-icon" src={more} alt="Ícone de mais"/>
                    <p>Veja mais</p>
                </button>
            </div>
        </div>
    )
}

export default PokemonThumb