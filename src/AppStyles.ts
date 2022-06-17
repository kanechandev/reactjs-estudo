import styled from "styled-components";

type BotaoProps = {
    bg: string;
    small?: boolean;
}

export const Botao = styled.button<BotaoProps>`
    font-size: ${(props) => props.small ? '15px' : '30px'};
    background-color: ${props => props.bg}
`;

type ContainerProps = {
    bgColor: string;
}

export const Container = styled.div<ContainerProps>`    
    background-color: ${(props) => props.bgColor};
    color: white;
    padding: 20px;

    span{
        font-weigth: bold;
        color: #963;
    }

    .link{
        color: #fff;
    }

    .link:hover{
        color: #fff;

        &:hover{
            color: #ff0000;
        }
    }
`;