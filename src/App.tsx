import { useState } from "react";

const App = () => {
  const [color, setColor] = useState('#ff0000');
  const [padding, setPadding] = useState(0);

  const handleClick = () => {
    setColor('#1100ff');
    setPadding(20);
  }

  return(
    <div>
      <button onClick={handleClick} style={{ 
          background: color , color: '#000000', 
          border: '0', padding}}>
        Clique aqui!
      </button>
    </div> 
  );
}

export default App;