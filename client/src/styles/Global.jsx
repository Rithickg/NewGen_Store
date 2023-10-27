import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

body{
    color: #000;
    background: #fff;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
}

p{
    opacity: 0.6;
    line-height: 1.5rem;
}

a{
    color: #fff;
    &:hover{
        color: red;
    }
}

img{
    max-width: 100%;
    height: auto;
}

`;