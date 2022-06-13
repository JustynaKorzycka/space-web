import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .logo-wrapper{
        margin-left: 55px;
    }

    .menu{
        background-color: #ffffff40;
        backdrop-filter: blur(81.5485px);
        padding: 20px 50px;
        flex-basis: 50%;
        
        a{
            margin-right: 20px;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
        }
    }
`