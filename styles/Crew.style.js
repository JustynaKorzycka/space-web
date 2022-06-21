import styled from 'styled-components';


export const ContainerMain = styled.div`
    max-width: 1200px ;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    flex-grow:1;
    display: flex;

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        justify-content: center;
    }
   
`