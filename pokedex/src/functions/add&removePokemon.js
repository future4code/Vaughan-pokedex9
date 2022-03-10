export const addToPokedex = (id, pokedexIdList, setPokedexIdList) => {
    const addNewId = [...pokedexIdList, id];
    setPokedexIdList(addNewId);
};

export const removePokemonOfPokedex = (id, pokedexIdList, setPokedexIdList) => {
    const copyPokemonIdList = [...pokedexIdList];
    const removedPokemonList = copyPokemonIdList.filter((pokemonId)=> {
      return pokemonId !== id;
    });
    setPokedexIdList(removedPokemonList);
  };