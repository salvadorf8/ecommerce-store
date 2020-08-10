import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        

        @media screen and (max-width: 576px) {
            //anything below 800 will get style, anything above will not
            .body {
                grid-area: body;
                padding: 5px;
            }
        }
        @media screen and (max-width: 768px) {
            //anything below 800 will get style, anything above will not
            
            .body {
                grid-area: body;
                padding: 10px;
            }
        }
        @media screen and (max-width: 992px) {
            //anything below 800 will get style, anything above will not
            // padding: 10px;
        }
        @media screen and (max-width: 1200px) {
            //anything below 800 will get style, anything above will not
            // padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }

    .parent {
        display: grid;
        grid-template-areas:
            'body'
            'footer';
        grid-template-rows: 1fr 45px;
        grid-template-columns: 100%;
        height: 100vh;
    }

    .body {
        grid-area: body;
        padding: 20px 60px;
    }

    .footer {
        grid-area: footer;
        background-color: #707070;
        
        
    }

    .signature {
        width: 80%;
        height: 100%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        /* padding-left: 70%; */
    }

`;
