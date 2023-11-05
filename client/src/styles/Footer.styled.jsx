import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   padding: 10px 0;
`
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
`
export const FooterRights = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
    color: #000;
`
export const FooterSection = styled.section`
    margin: 0 auto;
    padding: 20px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
`
export const Subscribe = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
    svg {
        font-size: 1.5rem;
        color: #333;
    }
    input {
        border: none;
        outline: none;
        width: 100%;
    }
    button {
        border: none;
        outline: none;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
    }
`
export const SocialLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    svg {
        font-size: 1.5rem;
        color: #fff;
        cursor: pointer;
    }
`   