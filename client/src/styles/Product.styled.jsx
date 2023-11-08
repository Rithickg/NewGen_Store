import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #d8d6d6;
    margin: 1rem;
    `;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    margin: 1rem;
    `;

export const ProductImage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `;
export const ProductImageCollection = styled.div`
    margin: 1rem;
    width: 60px;
    img{
        width: 60px;
        height: 60px;
        object-fit: cover;
        cursor: pointer;
    }
`
export const ActiveImage = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    border: 1px solid black;
    `;

export const ProductDetails = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
    `;

export const BuySection = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 1rem;
    `;

export const Button = styled.button`
    width: 100%;
    height: 2rem;
    margin: 0.3rem;
    background-color: #f0c040;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    `;

export const WishListButton = styled.button`
    width: 4rem;
    height: 2rem;
    margin: 0.3rem;
    /* background-color: #f0c040; */
    /* border: 1px solid black; */
    /* border-radius: 5px; */
    cursor: pointer;
    `;