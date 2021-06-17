import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const Button = styled(Link)`
    border-radius: 20px;
    background: ${({ primary }) => (primary? '#e30707': '#000')};
    white-space: nowrap;
    padding: ${({ big }) => (big? '14px 48px': '12 px 30px')};
    color: ${({ dark }) => (dark? '#000': '#fff')};
    font-size: ${({ fontBig }) => (fontBig? '40px': '36px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary? '#fff': '#e30707')};
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

`;