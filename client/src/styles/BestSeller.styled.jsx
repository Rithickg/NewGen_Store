import styled from "styled-components";
import { Link } from "react-router-dom";

export const BestSellerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    background-color: gray;
    width: 100%;
    height: 420px;
`
export const BestSellerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    height: 50px;
`

export const BestSellerProduct = styled.div`
    display: flex;
    flex-direction: row;
    height: 400px;
`
export const BestProduct = styled.div`
display: flex; 
 flex-direction: column;
 background-color: #a68282;
 margin:0.5rem;
width: 350px;
height: 350px;
`
export const StyledImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`

export const LinkStyled = styled(Link)`
    color: black;
    &:hover {
        text-decoration: underline;
        color:red;
    }
`