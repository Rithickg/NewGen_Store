import styled from "styled-components";
import { Link } from "react-router-dom";


export const FeaturedContainer = styled.div`
    display: grid;
    padding: 1rem;
    width: 100%;
    height: 500px;
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(1, 1fr);   
    grid-gap: 20px;
    background-color: gray;
`


export const ProductOne = styled.div`
    grid-area: 1 / 1 / 5 / 3;
    position:relative;
    background-color: #fff;
`
export const ProductTwo = styled.div`
    grid-area: 1 / 3 / 3 / 5;
    position:relative;
    background-color: #fff;

`
export const ProductThree = styled.div`
    grid-area: 3 / 3 / 5 / 4;
    position:relative;
    background-color: #fff;

`
export const ProductFour = styled.div`
    grid-area: 3 / 4 / 5 / 5;
    position:relative;
    background-color: #fff;

`
export const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ProductDetail = styled.div`
    position: absolute;
    bottom: 0;
    padding: 10px;
    width: 100%;
    text-align: left; 
    z-index: 1; 
`

export const StyledLink = styled(Link)`
    text-decoration: underline;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
        color: #363535;
    }
`
