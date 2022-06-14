import React, { useState } from "react";

const App = () => {
  const[nome, setNome] = useState('Kane');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  }

  return(
    <div>
      Nome:
      <input type="text" value={nome}  onChange={handleInput}/>
      <hr />
      Seu nome é: {nome}
    </div>
  );
}

export default App;