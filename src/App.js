import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <input type="text" 
        name="number" 
        value={number} 
        onChange={(event) => setNumber(event.target.value)} 
      />
      <button className = "botão" onClick={()=>setNumber(number+1)}>+</button>
    </>      
  );
}

export default App;
