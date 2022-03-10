import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { URL_BASE } from "../../constants/url";
import { PokedexContext } from "../../global/GlobalStateContext";
import PokemonThumb from "./PokemonThumb";
import "./style.css";

function PokedexPage() {
  const {pokedexIdList, setPokedexIdList} = useContext(PokedexContext);
  const [pokemonsInfoList, setPokemonsInfoList] = useState([]);

  useEffect(() => {
    getPokemonsInfo();
  }, [pokedexIdList]);

  const getPokemonsInfo = () => {
    setPokemonsInfoList([]);
    pokedexIdList.forEach( async (currentId) => {
      try {
        const response = await axios.get(`${URL_BASE}/${currentId}`);
        setPokemonsInfoList(prevList => [...prevList, response.data]);
      } catch (error) {
        console.log(error);
      };
    });
  };

  const removePokemonOfPokedex = (id) => {
    const copyPokemonIdList = [...pokedexIdList];
    const removedPokemonList = copyPokemonIdList.filter((pokemonId)=> {
      return pokemonId !== id;
    });
    setPokedexIdList(removedPokemonList);
  };
  
  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-containers">
            {!pokemonsInfoList.length
            ? <p>Não há pokemons adicionados na sua Pokedex</p>
            : pokemonsInfoList.sort((currentPokemon, nextPokemon) => {
              return currentPokemon.id - nextPokemon.id
            }).map((pokemon) => {
              return (
                <PokemonThumb
                  removePokemonOfPokedex={() => removePokemonOfPokedex(pokemon.id)}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  key={pokemon.id}
                />
              )}
            )}          
        </div>
      </div>
    </div>
  );
}

export default PokedexPage;