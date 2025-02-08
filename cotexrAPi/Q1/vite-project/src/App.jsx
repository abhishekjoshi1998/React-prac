import { use, useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NestedComponent from './components/NestedeComponent'
import ThemeProvider from './components/ThemeProvider'
import ThemeContext from './components/ThemeContext'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div
      style={{
        
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>{theme}</h1>
      <button onClick={toggleTheme} style={{ marginBottom: "20px" }}>
        Toggle Theme
      </button>
      <NestedComponent />
    </div>
    
  )
}

export default App
