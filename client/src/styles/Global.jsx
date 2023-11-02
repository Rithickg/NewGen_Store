import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none; 
    user-select: none;
}

body{
    color: #000;
    background: #fff;
    font-size: 1rem;

    font-family: 'Poppins', sans-serif;
}

  /* Hide scrollbar for Chrome, Safari, and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge */
  body::-ms-overflow-style {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  body {
    scrollbar-width: none;
  }

p{
    line-height: 1.5rem;
}

a{
    color: #000;
}

img{
    max-width: 100%;
    height: auto;
}

`;