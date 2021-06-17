import styled from "styled-components";
import { Link } from "react-router-dom";

export const MarketContainer = styled.div`
    height: 800px;
    position: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 760px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

`;

export const MarketH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-with: 480px) {
        font-size: 2rem;
    }
`;

export const MarketH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #000;
`;

export const MarketP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #000;
`;

export const MarketWrapper = styled.div`

    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 760px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const MarketCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const MarketIcon = styled.img`
    height: 120px;
    width: 120px;
    margin-bottom: 5px;
`;

export const MarketIconLink = styled.a`
    color: #fff;
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 50px;

    @media screen and (max-width: 400px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;









