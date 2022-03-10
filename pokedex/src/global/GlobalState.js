import { useState } from "react";
import { PokedexContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
    const [pokedexIdList, setPokedexIdList] = useState([]);
    return (
        <PokedexContext.Provider value={{pokedexIdList, setPokedexIdList}}>
            {props.children}
        </PokedexContext.Provider>
    );
};

