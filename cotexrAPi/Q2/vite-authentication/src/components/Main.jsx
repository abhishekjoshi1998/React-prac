import { useContext } from "react"
import AuthContext from "./AuthContext"


const Main = ()=>{
    const {isAuthenticated} = useContext(AuthContext)
    return (
        <main >
            <h1>{isAuthenticated ? "wellcome back!": "Please Login "}</h1>
        </main>
    )
}
export default Main