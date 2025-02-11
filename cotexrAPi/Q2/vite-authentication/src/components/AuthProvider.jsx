import { useState } from "react";
import AuthContext from "./AuthContext";


const AuthProvider =({children})=>{
    const [isAuthenticated , setAuthenticated]= useState(false);

    const toggleAuth =()=>{
        setAuthenticated((prevState) => !prevState)
    }
    return(
        <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider 