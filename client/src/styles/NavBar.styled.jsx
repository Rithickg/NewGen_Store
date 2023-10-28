import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid black;
    padding: 1rem;
`

export const OrderList = styled.ol`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin: 0;
    padding: 0;
    li:hover {
        cursor: pointer;
        text-decoration: underline;

    }
`