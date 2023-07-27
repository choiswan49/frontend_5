import { createContext, useState } from "react";

export const CountContext = createContext();

export const CountContextProvider = ({children})=>{
    const [count, setCount] = useState(0);
    return(
        <CountContext.Provider value={{count, setCount}}>
            {children }
        </CountContext.Provider>
    )
}