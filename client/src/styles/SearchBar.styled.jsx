import styled from "styled-components";

export const SearchInput = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0 10px;
    margin: 0 10px;
    width: 250px;
    height: 30px;
    background-color: #f7f3f3;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    background-color: transparent; 
    width: 100%;
    height: 100%;
    appearance: none;
    &::-webkit-search-cancel-button,
    &::-webkit-search-clear-button {
    display: none;
  }
`;