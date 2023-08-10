import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pokemon, setPokemon] = useState("");

  return (
   
    <div className="App">
      <Form setNombre={setNombre} nombre={nombre} setEdad={setEdad} edad={edad} setPokemon={setPokemon} pokemon={pokemon} />
    </div>
  )
}

export default App
