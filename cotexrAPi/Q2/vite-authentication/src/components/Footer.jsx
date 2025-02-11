import { useContext } from "react"
import AuthContext from "./AuthContext"


const Footer =()=>{
    const {isAuthenticated} = useContext(AuthContext)
    return(
        <footer>
            <h3>{isAuthenticated? "Wellcome user" : "please Login"}</h3>
        </footer>
    )
}
export default Footer