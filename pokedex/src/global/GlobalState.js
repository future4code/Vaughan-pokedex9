import { useState } from "react";
import { PokeballContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
    const [pokeballIdList, setPokeballIdList] = useState([]);
    return (
        <PokeballContext.Provider value={{pokeballIdList, setPokeballIdList}}>
            {props.children}
        </PokeballContext.Provider>
    );
};

