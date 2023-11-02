import styled from "styled-components";
import { Link } from "react-router-dom";

export const BestSellerContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    background-color: gray;
    width: 100%;
    height: 425px;
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
 background-color: #fff;
 margin:0.5rem;
min-width: 250px;
height: 350px;
max-height: fit-content;
border-radius: 5px;
&:hover{
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
}

h3{
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}

p{
    margin-left: 0.5rem;
    white-space: nowrap; 
   max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
}
`
export const StyledImage = styled.img`
    width: 350px;
    height: 250px;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`

export const LinkStyled = styled(Link)`
    color: black;
    &:hover {
        text-decoration: underline;
    }
`
export const ProductLink = styled(Link)`
    color: black;
    &:hover {
        text-decoration: underline;
    }
`