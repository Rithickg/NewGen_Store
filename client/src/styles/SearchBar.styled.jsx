import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchInput = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0 10px;
    margin: 0 10px;
    width: 500px;
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

export const SearchResult = styled.div`
  position: absolute;
  top:50px;
  z-index: 1;
  width: 500px;
  padding: 0 10px;
  margin: 0 10px;
  max-height: fit-content;
  background-color: #d7c6c6;
  color: black;
`

export const List = styled.li`
  list-style: none;
  background-color: #f7f3f3;
  margin: 0.2rem;
  color: black;
`