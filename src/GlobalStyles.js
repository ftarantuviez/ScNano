import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button {
        margin: 0;
        padding: 0;
    }

    ul{
        list-style: none;
    }

    button{
        background: transparent;
        border: 0;
        outline: 0;
    }
    
    a{
        text-decoration: none;
        color: #292d36;

    }

    body{
        background: #fefefe;
        height: 100vh;
        margin: 0 auto;
        
        width: 100%;
        overflow-x: hidden;

    }

    #app{
        overflow-x: hidden;
        min-height: 100vh;
        
    }

`