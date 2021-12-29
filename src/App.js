import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>

      <h2 className = {number >= 0 ? "positive":"negative"} >
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>

      <button className = "botão" onClick={()=>setNumber(number + 1)}>+</button>

      <br />
      <br />
      <input 
        type="number" 
        name="number" 
        value={number} 
        onChange={(event) => setNumber(parseInt(event.target.value))} 
      />
      
    </>      
  );
}

export default App;
