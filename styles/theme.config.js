import { createGlobalStyle } from "styled-components";

export const lightTheme= {
    body: '#0B0D17',
    primaryColor: '#FFFFFF',
    secondaryColor: "#D0D6F9",
    text: "#FFFFFF",
    tabletWidth: '992',
    mobileWidth: '576px'
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
        letter-spacing: 4.75px;
    }

    a{
        color: ${({theme})=>theme.text};
        font-size: 16px;
        text-decoration: none;
        letter-spacing: 2.7px;
        position: relative;
    }
    a::after{
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        bottom: 3px;
        left:0;
        right: 0;
        background-color: transparent;
    }
    a:hover::after{
        background-color: rgba(256,256,256,0.20);
    }
    a.active::after{
       background-color: #fff;
    }
`