import styled from 'styled-components';

export const ContainerMain = styled.div`
    max-width: 1110px ;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10vh;
    
   
    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        flex-grow: 1;
        display: flex;
        justify-content: center;
    }
   
`
export const ContainerWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    
    @media screen and (max-width: 1160px){
        margin-left: 25px;
        margin-right: 25px;
    }

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
    }

`

export const TitleSection = styled.section`
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        text-align: center;
    }

    h1{
        text-align: center;
        margin-bottom: 10px;
    }

`

export const ExploreSection = styled.section`
    align-self: flex-end;

    .btn-circle{
        width: 274px;
        height: 274px;
        background-color: ${({theme})=>theme.primaryColor}; 
        border-radius: 50%;
        border: none;
        font-size: 32px;
        letter-spacing: 2px;
        color: ${({theme})=>theme.body};
        font-family: 'Times New Roman', Times, serif;
        cursor: pointer;
        transition: all .3s ease-in;

        &:hover{
            -webkit-box-shadow: 0px 0px 0px 88px rgba(255,255,255, 0.1);
            -moz-box-shadow: 0px 0px 0px 88px rgba(255,255,255, 0.1);
            box-shadow: 0px 0px 0px 88px rgba(255,255,255, 0.1);
        }

    }

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        align-self: center;

        .btn-circle{
            width: 242px;
            height: 242px;

            &:hover{
            -webkit-box-shadow: 0px 0px 0px 60px rgba(255,255,255, 0.1);
            -moz-box-shadow: 0px 0px 0px 60px rgba(255,255,255, 0.1);
            box-shadow: 0px 0px 0px 60px rgba(255,255,255, 0.1);
        }
        }
    }

    @media screen and (max-width: ${({theme})=>theme.mobileWidth}px){

        .btn-circle{
            width: 150px;
            height: 150px;
            font-size: 20px;
            letter-spacing: 1.25px;

            &:hover{
            -webkit-box-shadow: 0px 0px 0px 33px rgba(255,255,255, 0.1);
            -moz-box-shadow: 0px 0px 0px 33px rgba(255,255,255, 0.1);
            box-shadow: 0px 0px 0px 33px rgba(255,255,255, 0.1);
        }
        }
    }


`