function Hijo ({frase, count, setCount}){
    return(
        <div>
            <div>
                <h1>{frase}</h1>
                <span>PREGUNTAS: {count} </span>       
            </div>
            <div>
                <button onClick={() => setCount(0)}>
                    BORRAR CONTADOR
                </button>
            </div>
            </div>
    )
}
export default Hijo;