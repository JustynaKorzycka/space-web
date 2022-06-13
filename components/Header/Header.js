import Link from 'next/link';
import Image from 'next/image';
import { HeaderWrapper } from './Header.style';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className='logo-wrapper'>
        <Image src='/assets/shared/logo.svg' width={48} height={48}/>
      </div>
      <div className='menu'>
        <Link href='/'><a><span>00</span> Home</a></Link>
        <Link href='/destination'><a><span>01</span> Destination</a></Link>
        <Link href='/crew'><a><span>02</span> Crew</a></Link>
        <Link href='/technology'><a><span>03</span> Technology</a></Link>
      </div>

    </HeaderWrapper>
  )
}

export default Header