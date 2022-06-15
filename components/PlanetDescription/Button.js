import { Children } from 'react';
import styled from 'styled-components';


const Button = ({handleClick,isActive, children}) => {


  return (
    <ButtonPlanet onClick={handleClick} className={isActive ? 'active': ''}>{children}</ButtonPlanet>
  )
}

export default Button;

const ButtonPlanet = styled.button`
    background-color: transparent;
    border: none;
    color: ${({theme})=>theme.secondaryColor};
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    position: relative;
    padding-bottom: 15px;
    cursor: pointer;

    &::after{
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        bottom: 3px;
        left:0;
        right: 0;
        background-color: transparent;
    }

    &:hover::after{
        background-color: rgba(256,256,256,0.20);
    }
    &.active::after{
        background-color: #fff;
    }
`