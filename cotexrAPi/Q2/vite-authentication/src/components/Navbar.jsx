import { useContext } from "react"
import AuthContext from "./AuthContext"


const Navbar =()=>{
    const {isAuthenticated, toggleAuth} = useContext(AuthContext)
    return(
        <nav>
            <h2>My App</h2>
            <button onClick={toggleAuth}>{isAuthenticated? "Logout":"Login"}</button>
        </nav>
    )
}
export default Navbar