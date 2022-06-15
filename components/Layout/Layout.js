import Header from '../Header/Header';
import { LayoutWrapper } from './Layout.style';
import { useRouter } from 'next/router'



const Layout = ({children, isMobile}) => {

  const {pathname} = useRouter();

  let direction;
  let justifySpecific = 'flex-start';

  switch(pathname){
    case '/':
      direction='home';
      justifySpecific='space-between';
      break;
    case '/crew':
      direction='crew';
      break;
    case '/destination':
      direction= 'destination';
      break;
    case '/technology':
      direction= 'technology';
      break;
    default:
      direction='home';
  }

  
  return (
    <LayoutWrapper pathname={direction} justifySpecific={justifySpecific}>
        <Header  isMobile={isMobile<578? true : false}/>
        {children}
          
    </LayoutWrapper>
    
  )
}

export default Layout