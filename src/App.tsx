import { Botao } from "./components/Botao";

const App = () => {
  let textoDoBotao = 'Clique aqui';

  const botaoEventAction = (text: string) => {
    alert("Mensagem do App.tsx : "+text);
  }

  return(
    <div>
      <Botao text={textoDoBotao} clickFn={botaoEventAction}/>
    </div>
  );
}

export default App;