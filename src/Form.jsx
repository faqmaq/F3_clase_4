function Form({setNombre, nombre, setEdad, edad, setPokemon, pokemon}){
    
    function handleNombre (e){
        setNombre(e.target.value)
    }
    
    function handleEdad (e){
        setEdad(e.target.value)
    }

    function handlePokemon (e){
        setPokemon(e.target.value)
    }

    function registrarDatos (e){
        e.preventDefault();
        alert("Datos Registrados: "+nombre+" - "+edad+" - "+pokemon)
    }

    return(
        <div>
            <h1>POKEMON</h1>
            <form onSubmit={registrarDatos}>
                <div className="form">
                    <input type="text" name="NOMBRE" placeholder="Nombre" onChange={handleNombre}/>
                    <input type="number" name="EDAD" placeholder="Edad" onChange={handleEdad}/>
                    <input type="text" name="POKEMON" placeholder="Pokemon Favorito" onChange={handlePokemon}/>
                    <input type="submit" value="ENVIAR" />

                </div>
            </form>
        </div>
    )
}
export default Form;