import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
        *{
            margin: 0;
            padding : 0;
            box-sizing: border-box;
            list-style-type: none;
            text-decoration: none;
        }
        body{
           height: 100vh;
           font-family: 'Poppins',sans-serif;

        }
        a{
            font-family: inherit;
            font-size: inherit;
            font-weight: 600;
        }
`;

export default GlobalStyle;
