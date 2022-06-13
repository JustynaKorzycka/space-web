import styled from 'styled-components';


export const LayoutWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: ${props=>`url("/assets/${props.pathname}/background-${props.pathname}-desktop.jpg")`};
    background-repeat: no-repeat;
    background-size: cover;
   
   
   @media screen and (max-width:992px){
    background-image: ${props=>`url("/assets/${props.pathname}/background-${props.pathname}-tablet.jpg")`};
   }

   @media screen and (max-width:576px){
    background-image: ${props=>`url("/assets/${props.pathname}/background-${props.pathname}-mobile.jpg")`};
   }
`