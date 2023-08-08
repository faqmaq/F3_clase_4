import './App.css'

function Padre({setFrase, count, setCount}){
    function click (frase, count){
        setFrase(frase);
        setCount(count+1);
    }
    
    return(
        <div>
         
            <h1>HOLA</h1>
            <div className="div">
                <button onClick={() => click("FACUNDO",count)}>
                    ¿QUIEN SOS?
                </button>
                <button onClick={() => click("39", count)}>
                    ¿CUANTOS AÑOS TENES?
                </button>
                <button onClick={() => click("FRONTEND 3", count)}>
                    ¿QUE ESTAS CURSANDO?
                </button>
             
            </div>
            
        </div>
    )
}
export default Padre;