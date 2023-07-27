import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const login = user =>{
        setUser(user)
    }
    const logout = user =>{
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user, setUser, login, logout}}>
            {children }
        </AuthContext.Provider>
    )
}