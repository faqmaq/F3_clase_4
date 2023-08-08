import { useState } from 'react'
import './App.css'
import Padre from './Padre'
import Hijo from './Hijo'

function App() {
  const [frase, setFrase] = useState("")
  const [count, setCount] = useState(0)

  return (
    <div>
      <Padre setFrase={setFrase} count={count} setCount={setCount} />   
      <Hijo frase={frase} count={count} />   
    </div>    
  )
}

export default App
