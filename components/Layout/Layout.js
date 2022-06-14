import Header from '../Header/Header';
import { LayoutWrapper } from './Layout.style';
import { useRouter } from 'next/router'



const Layout = ({children, isMobile}) => {

  const {pathname} = useRouter();

  let direction;

  switch(pathname){
    case '/':
      direction='home';
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
    <LayoutWrapper pathname={direction}>
        <Header  isMobile={isMobile<578? true : false}/>
        <main>{children}</main>
    </LayoutWrapper>
    
  )
}

export default Layout