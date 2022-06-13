import { createGlobalStyle } from "styled-components";

export const lightTheme= {
    body: '#0B0D17',
    $primaryColor: '#FFFFFF',
    $secondaryColor: "#D0D6F9",
    text: "#FFFFFF",
}

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin:0
    }
    body{
        font-family: 'Barlow Condensed', sans-serif;
        background-color: ${({theme})=>theme.body};
        color: ${({theme})=>theme.text};
        font-weight: 400;
        font-style: normal;
    }
    h1{
        font-size: 150px;
    }
    h2{
        font-size: 100px;
    }
    h3{
        font-size: 56px;
    }
    h4{
        font-size: 32px;
    }
    h5{
        font-size: 28px;
        letter-spacing: 4.75;
    }
    a{
        color: #fff;
        font-size: 16px;
    }
`