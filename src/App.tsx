import { Pessoa } from "./components/Pessoa";

const App = () => {
  
  let list = [
    {nome: 'Felipe', idade: 20},
    {nome: 'Gustavo', idade: 16},
    {nome: 'Leonardo', idade: 20},
    {nome: 'Milena', idade: 16},
    {nome: 'Vitor', idade: 20},
  ];

  return(
    <div>
      <h2>Lista de presença</h2>
        <ul>
          {list.map((item, index)=>(
            <Pessoa key={index} data={item}/>
          ))}
        </ul>
    </div>
  );
}

export default App;