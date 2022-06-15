type Props = {
    data: {
        nome: string,
        idade: number
    }
}

export const Pessoa = ({ data } : Props) => {
    return (
        <li>
            {data.nome} - {data.idade} anos.
        </li>
    );
}