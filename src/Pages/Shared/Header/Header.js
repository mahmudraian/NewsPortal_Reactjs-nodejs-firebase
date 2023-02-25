
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../ConTEXT/AuthProvider/AuthProvider';
import Leftsidenav from '../LeftSideNav/Leftsidenav';

const Header = () => {

  const {user,Logout}=useContext(AuthContex)


  const handleLogout=()=>{
    Logout()
    .then(result=>{
      
      })
      .catch((error)=>{
          console.log('error',error)
      })

  }
    return (
        <Navbar  className="mb-5" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to='/' className=''
      style={{}}>
      <Navbar.Brand  >
      Dragon News
      </Navbar.Brand>
      </Link>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
        
            
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
          {
            user ?
            <span className='d-flex'>
           <span >
            {user?.displayName}
            </span> 
            {/* <button onClick={handleLogout}>LOGOUT</button> */}
            <Nav.Link   className='mr-5' onClick={handleLogout} href="#features">Log out</Nav.Link>
            </span>
           :
           <span className='d-flex'>
            <Link to='/login'>
            <Nav.Link href="#features">Log in</Nav.Link>
             </Link>
             <Link to='/register'>
          <Nav.Link href="#pricing">Register</Nav.Link>
          </Link>
           </span>
            

          }

            </Nav.Link>
           
            <Nav.Link eventKey={2} href="#memes">
            { user? <Image style={{width:'30px'}} roundedCircle src={user?.photoURL}></Image>
          :
          <FaUser></FaUser>  
          }
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
        <Leftsidenav></Leftsidenav>
      </div>

        </Navbar.Collapse>
      </Container>

     
    </Navbar>


    );
};

export default Header;