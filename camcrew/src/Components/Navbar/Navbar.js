import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes } from 'react-router-dom';
import Logo from './Logo';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { IconContext } from "react-icons";
import Home from '../Body/Home';

// import Home from '../Body/Homepage/Home';
// import Logo from './Logo';


function NavBar() {
  // const handleClickScroll = () => {
  //   const element = document.getElementById('services');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
    <Navbar collapseOnSelect expand="md" variant="dark" className='Navbar_main'>
      <Container className='Navbarcon'>
        <Navbar.Brand href="#"><Logo/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto my-2 my-xxl-0 gap-4 me-auto">
          <Nav.Link className='navbar_link' as={Link} to="/Home" eventKey="1">Home</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/About" eventKey="1">About</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Services" eventKey="1">Services</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Career" eventKey="1">Career</Nav.Link>
          <Nav.Link className='navbar_link' as={Link} to="/Contact" eventKey="1">Contact</Nav.Link> 
          <Nav.Link className='navbar_link' as={Link} to="/Faq" eventKey="1">FAQ's</Nav.Link>  
 
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
            <Route path='*' element={<Home></Home>}></Route>
            <Route path='/Home' element = {<Home></Home>}></Route>
            <Route path='/CamCrew/' element = {<Home></Home>}></Route>
         

        </Routes>
    </div>
    </>
  );
}

export default NavBar;