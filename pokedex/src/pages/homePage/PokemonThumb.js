import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { goToPokemonDetailsPage } from "../../routes/coordinator";
import "./style.css"
import pokeballImg from "../../assets/pokeball.png"
import more from "../../assets/plus.png"
import { PokedexContext } from "../../global/GlobalStateContext";
import { typeInPortuguese } from "../../functions/typeInPortuguese";
import { addToPokedex, removePokemonOfPokedex } from "../../functions/add&removePokemon";

const PokemonThumb = ({id, name, image, type}) => {
    const navigate = useNavigate();
    const {pokedexIdList, setPokedexIdList} = useContext(PokedexContext);

    const style = `thumb-container ${type}`

    return(
        <div className={style}>
            <div className="number">
                {id < 10 ? <small>#0{id}</small> : <small>#{id}</small>}
            </div>
            <img src={image} alt={name}></img>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Tipo: {typeInPortuguese(type)}</small>
            </div>
            <div className="buttons-card">
                {(pokedexIdList.findIndex((pokemonId) => pokemonId === id)) === -1
                ? (
                    <button onClick={() => addToPokedex(id, pokedexIdList, setPokedexIdList)}>
                        <img src={pokeballImg} alt="Ícone de pokebola"/>
                        <>Adicionar Pokedex</>
                    </button>)
                : (
                    <button onClick={() => removePokemonOfPokedex(id, pokedexIdList, setPokedexIdList)}>
                        <img src={pokeballImg} alt="Ícone de pokebola"/>
                        <>Remover Pokedex</>
                    </button>)                
                }
                
                <button onClick={() => goToPokemonDetailsPage(navigate, name)}>
                    <img className="more-icon" src={more} alt="Ícone de mais"/>
                    <p>Veja mais</p>
                </button>
            </div>
        </div>
    )
}

export default PokemonThumb