import React, {useState} from 'react'
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import Container from '../sections/elements/Container';

const Header = ({menulist}) => {

  const [isOpen, setOpen] = useState(false);

  const menutoggler = ()=> {
    setOpen(!isOpen);
  }

  return (
    <>
        <header className='site-header'>
          <div className='head-line'>
            <Container>
              333
              <div className='separator'/>
            </Container>
          </div>
          <NavBar menulist={menulist} isMobile={false} open={isOpen} menutoggler={menutoggler} />
        </header>
        {
          isOpen ? <SideMenu menutoggler={menutoggler}/> : null
        }
    </>
  )
}

export default Header