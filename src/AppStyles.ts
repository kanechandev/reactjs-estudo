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
    display: flex;

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

    @media (max-width: 500px){
        background-color: #87ceeb;
        flex-direction: column;

        span{
            color: red;
        }
    };
`;