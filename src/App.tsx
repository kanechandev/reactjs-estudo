import * as C from './AppStyles';

const App = () => {
    return(
        <C.Container bgColor="#1c1c1c">
            <span>Texto no span.</span> 
            <a href="" className="link">Link aqui</a>           
            Lorem ipsum
            <C.Botao bg="#ff0000">Clique</C.Botao>
            <C.Botao bg="#00ff00" small>Clique</C.Botao>
        </C.Container>
    );
}

export default App;