import styled from 'styled-components';


export const ContainerMain = styled.div`
    max-width: 1110px ;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    flex-grow:1;
    display: flex;

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        justify-content: center;
    }
   
`

export const ContainerWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    h5{
        text-transform: uppercase;

        span{
            opacity: 0.25;
            font-weight: 700;
        }
    }
    
    @media screen and (max-width: 1160px){
        margin-left: 25px;
        margin-right: 25px;
        margin-bottom: 0;
    }

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        align-items: center;
        h5{
            align-self: flex-start;
        }
    }

`

export const PlanetSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 37px; 

    .image-section{
        flex-basis: 40%;
    }
    .text-section{
        flex-basis: 40%;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        flex-direction: column;
        align-items: center;
        gap: 40px;
        .image-section{
            height: 300px;
            width: 300px;
        }
        .text-section{
            align-items: center;
        }

    }
    
`

export const PlanetNavbar = styled.div`
    display: flex;
    gap: 35px;

`

export const PlanetDescription = styled.section`
    flex-grow:1;
    display: flex;
    flex-direction: column;
    &>h2{
        text-transform: uppercase;
    }
    &>p{
        margin-top: 14px;
        padding-bottom: 20px;
        flex-grow:1;
        border-bottom: 1px solid #383B4B;
    }

    .distance-section{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 28px;

        .amount{
            font-size: 28px;
            color: ${({theme})=>theme.primaryColor};
            text-transform: uppercase;
            font-family: 'Times New Roman', Times, serif;
            font-weight: 300;
        }
    }

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        align-items: center;
        &>p{
            text-align: center;
        }
        .distance-section{
            width: 100%;
            justify-content: space-between;
            text-align: center;
        }
    }

 
`