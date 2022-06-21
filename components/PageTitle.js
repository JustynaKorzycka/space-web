import styled from 'styled-components';


const PageTitle = ({text, number}) => {
  return (
    <PageTitleText><span>{number} </span>{text}</PageTitleText>
  )
}

export default PageTitle;

const PageTitleText = styled.h5`
    text-transform: uppercase;
    margin-bottom: 20px;

    span{
        opacity: 0.25;
        font-weight: 700;
    }

    @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
        align-self: flex-start;
    }
`