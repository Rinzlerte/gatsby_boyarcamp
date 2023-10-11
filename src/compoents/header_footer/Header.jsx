import React, {useState} from 'react'
import MobileMenu from './MobileMenu';
import NavBar from './NavBar';
import Container from '../sections/elements/Container';

const Header = ({menulist}) => {

  const [isOpen, setOpen] = useState(false);

  return (
    <>
        <div className='head-line'>
          <Container>
            
          </Container>
        </div>
        <header className='site-header'>
          <NavBar menulist={menulist} isMobile={false} />

        </header>
        {
          isOpen ? <MobileMenu>
            <NavBar menulist={menulist} isMobile={true} />
          </MobileMenu> : null
        }
    </>
  )
}

export default Header