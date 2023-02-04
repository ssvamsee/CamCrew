import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Logo from './Logo';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { IconContext } from "react-icons";
import Home from '../Body/Home';
import Services from '../Body/Services';
import About from '../Body/About';
import Work from '../Body/Work';
import Faq from '../Body/FAQ';
import Contact from '../Body/Contact';
// import { useState } from 'react';
// import {link} from 'react-scroll'

function NavBar() {

  // const [click, setClick] = useState(false)
  // const handleClick = () => setClick(!click)

  // const closeMenu = () => setClick(false)
  return (
    <>
    <Navbar collapseOnSelect expand="md" variant="dark" className='Navbar_main'>
      <Container className='Navbarcon'>
        <Navbar.Brand href="#"><Logo/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          {/* <Nav className="ms-auto my-2 my-xxl-0 gap-4 me-auto"{...click ? "nav-menu active" : "nav-menu"}> */}
          <Nav className="ms-auto my-2 my-xxl-0 gap-4 me-auto">

          <Nav.Link className='navbar_link' as={Link} to="/Home" eventKey="1">Home</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/About" eventKey="1">About</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Services" eventKey="1">Services</Nav.Link>
                    {/* <link className='navbar_link' as={Link} to="Services" eventKey="1" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Services</link> */}

          <Nav.Link className='navbar_link' as={Link} to="/Career" eventKey="1">Career</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Contact" eventKey="1">Contact</Nav.Link> 
          <Nav.Link className='navbar_link' as={Link} to="/faq" eventKey="1">FAQ's</Nav.Link>  
 
        </Nav>
        <div className="icons">
        <IconContext.Provider value={{ className: "shared-class", size: 30 }} >
            <AiOutlineFacebook/>
            <AiOutlineInstagram/>
            <AiOutlineTwitter/>
        </IconContext.Provider>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Home' element = {<Home></Home>}></Route>
            <Route path='/CamCrew' element = {<Home></Home>}></Route>
            <Route path='/About' element = {<About/>}></Route>
            <Route path='/Services' element = {<Services/>}></Route>            
            <Route path='/Career' element = {<Work/>}></Route>
            <Route path='/Contact' element = {<Contact/>}></Route>
            <Route path='/faq' element = {<Faq/>}></Route>



        </Routes>
    </div>
    </>
  );
}

export default NavBar;