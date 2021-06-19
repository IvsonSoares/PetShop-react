import styled from "styled-components";

export const ModalBg = styled.div`

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    background: #505050;
`;

export const ModalContainer = styled.div`
    background: #fff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;

`;

export const ModalP = styled.p`

`;

export const ModalH1 = styled.h1`
    color: #000;
    font: 2rem;
`;

export const ModalBtnClose = styled.h1`
    font-size: 2rem;
    margin-top: 50px;
    right: 20px;
    font-weight: bold;
    cursor: pointer;

`;


export const ModalImg = styled.img`


`;