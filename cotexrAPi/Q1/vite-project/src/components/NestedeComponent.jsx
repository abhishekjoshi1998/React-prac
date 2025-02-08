import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const nestedComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (

    <>
    <div style={{backgroundColor :theme === "light" ? "#ddd" : "#555" , color: theme === "light" ? "#000" : "#fff"}}>
    <h2>This nested component</h2>
    </div>
 
    </>
  )
};
export default nestedComponent