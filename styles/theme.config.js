import { createGlobalStyle } from "styled-components";

export const lightTheme= {
    body: '#0B0D17',
    primaryColor: '#FFFFFF',
    secondaryColor: "#D0D6F9",
    text: "#FFFFFF",
    tabletWidth: '992',
    mobileWidth: '576'
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
        font-family: 'Times New Roman', Times, serif;
        font-weight: 400;
    }
    h2{
        font-size: 100px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: 400;

    }
    h3{
        font-size: 56px;
        font-family: 'Times New Roman', Times, serif;

    }
    h4{
        font-size: 32px;
        font-family: 'Times New Roman', Times, serif;

    }
    h5{
        font-size: 28px;
        letter-spacing: 4.725px;
        color: ${({theme})=>theme.secondaryColor};
        font-weight: 400;
    }
    p{
        font-size: 18px;
        line-height: 178%;
        font-weight: 300;
        color: ${({theme})=>theme.secondaryColor};
        letter-spacing: 1px;

    }

    a{
        color: ${({theme})=>theme.text};
        font-size: 16px;
        text-decoration: none;
        letter-spacing: 2.7px;
        position: relative;
    }
    a.styled::after{
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        bottom: 3px;
        left:0;
        right: 0;
        background-color: transparent;
    }
    a.styled:hover::after{
        background-color: rgba(256,256,256,0.20);
    }
    a.styled.active::after{
       background-color: #fff;
    }

    .subtitle_small{
        text-transform: uppercase;
        color: ${({theme})=>theme.secondaryColor};
        font-size: 14px;
        letter-spacing: 2.3625px;
    }


    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        h1{
        font-size: 150px;
        }

        h2{
            font-size: 80px;
        }
        h3{
            font-size: 56px;
        }
        h4{
            font-size: 32px;
        }
        h5{
            font-size: 20px;
            letter-spacing: 3.375px;
        }
        p{
            font-size: 16px;
        }
    }

    @media screen and (max-width: ${({theme})=>theme.mobileWidth}px){
        h1{
            font-size: 80px;
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
            font-size: 19px;
            letter-spacing: 2.7px;
        }
        p{
            font-size: 15px;
        }
    }

    


`

//tablet device

