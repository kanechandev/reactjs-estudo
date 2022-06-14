type Props = {
    text: string;
    clickFn: (text: string) => void;
}

export const Botao = ({text, clickFn }:Props) => {

    const handleClick = () => {
        clickFn("Frase");
    }

    return(
        <button onClick={handleClick}>{text}</button>
    );
}