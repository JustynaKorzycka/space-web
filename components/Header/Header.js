import Link from 'next/link';
import Image from 'next/image';
import { HeaderSection, HeaderWrapper } from './Header.style';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = ({isMobile}) => {

  const {pathname} = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if(!isMobile) setIsOpen(false)
  }, [isMobile, pathname])
 
  
 
  return (
    <HeaderSection>
      <header className={isMobile ? 'mobile header' : 'desktop header'}>
        <div className='logo-wrapper'>
          <Link href='/'>
            <a>
              <Image src='/assets/shared/logo.svg' width={48} height={48} />
            </a>
          </Link>
        </div>
       
        {isMobile && <div className='menu-ico' onClick={()=>setIsOpen(!isOpen)}><Image src={isOpen ?  '/assets/shared/icon-close.svg' : '/assets/shared/icon-hamburger.svg'}  width={24} height={21}/></div>}
        <div className={isMobile ? `menu-wrapper mobile ${isOpen ? 'open': ''}` : 'menu-wrapper' } onClick={()=>{
          if(isOpen) setIsOpen(false);
        }}>
          <nav className='menu'>
            <Link href='/'><a className={pathname==='/' ? 'active styled' : 'styled'} ><span>00</span> Home</a></Link>
            <Link href='/destination'><a className={pathname==='/destination' ? 'active styled' : 'styled'}><span>01</span> Destination</a></Link>
            <Link href='/crew'><a className={pathname==='/crew' ? 'active styled' : 'styled'}><span>02</span> Crew</a></Link>
            <Link href='/technology'><a className={pathname==='/technology' ? 'active styled' : 'styled'}><span>03</span> Technology</a></Link>
          </nav>
        </div>
      </header>
      

    </HeaderSection>
  )
}

export default Header