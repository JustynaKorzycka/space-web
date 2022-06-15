import styled from 'styled-components';

export const HeaderSection = styled.section`

    position: relative;


    .header.desktop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0 0 55px;
        margin-bottom: 76px;

        @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
            padding: 0 0 0 39px;
            margin-bottom: 40px;
        }


        .logo-wrapper{
            flex-basis: 40%;
            position: relative;

            &::after{
                content: '';
                border-top: 1px solid #fff;
                height: 0px;
                width: calc(105% - 64px);
                left: 64px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                opacity: .25;

                @media screen and (max-width: ${({theme})=>theme.tabletWidth}px){
                    width: 0;
                }
            }
        }


        .menu-wrapper{
            display: flex;
            flex-basis: 60%;
            justify-content: center;
            align-items: center;
            height: 96px;
            background-color: rgba(255, 255, 255, 0.10) ;
            min-width: 500px;
            padding: 0 48px;
        }

        .menu{
            width: 100%;
            max-width: 500px;
            display: flex;
            justify-content: space-between;

            a{
                line-height:  96px;
            }
        }
    }

    .header.mobile{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding:24px ;
        align-items: center;
        
        
      
        .menu-ico{
            cursor: pointer;
            z-index: 1;
            position: relative;
        }

        .menu-wrapper.mobile{
            position: absolute;
            top:0;
            right:0;
            width: 254px;
            height: 100vh;
            display: none;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(81.5485px);
            padding: 118px 32px;
           

            &.open{
               display: block;
                opacity: 1;

                .menu{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    a{
                        text-transform: uppercase;
                        height: 32px;
                    }
                }
            }
        }


    }


    
`