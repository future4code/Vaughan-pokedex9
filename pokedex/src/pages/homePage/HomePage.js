import React, { useEffect, useState } from "react";
import PokemonThumb from "./PokemonThumb";
import "./style.css"

export default function HomePage () {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit = 20")

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    console.log(data)

    function createPokemonObject (result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
        allPokemons.push(data)

        
      })
    }
    await console.log(allPokemons) 
    createPokemonObject(data.results)
  }

  useEffect(() => {getAllPokemons()}, [])

  return(
   <div className="app-container">
     <h1>Pokedex</h1>

     <div className="pokemon-container">

       <div className="all-containers">
          {allPokemons.map((pokemon, index) => 
          <PokemonThumb
            id={pokemon.id} 
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type ={pokemon.types[0].type.name}
            key={index}
          ></PokemonThumb>
          )}
       </div>

       <button className="load-more" onClick={() => getAllPokemons()}>Load More</button>
     </div>
   </div>
   
  )
}