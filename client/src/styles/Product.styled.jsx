import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
    margin: 1rem;
    `;

export const ImageContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    width: 50%;
    margin: 1rem;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        div {
        margin: 1rem;
        img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            cursor: pointer;
        }
        }
    }
    `;
export const ActiveImage = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    border: 1px solid black;
    `;

export const ProductDetails = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    /* align-items: center;  */
    margin: 1rem;
    `;