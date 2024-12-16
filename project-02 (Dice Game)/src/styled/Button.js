import styled from "styled-components";

export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 18px ;
    border-radius:5px;
    min-width: 220px ;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s ease-IN;
    cursor: pointer;

    &:hover{
        background-color:white;
        color: black;
        border: 1px solid black;
        transition: 0.3s ease-in;
        cursor: pointer;
    }
`;
export const OutlineButton = styled(Button)`
         background-color:white;
         color: black;
         border: 1px solid black;
 &:hover{
        border: 1px solid transparent;
        transition: 0.3s ease-in;
        cursor: pointer;
    }
`;

