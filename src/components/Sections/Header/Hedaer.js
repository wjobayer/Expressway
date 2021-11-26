import React from 'react';
import { Button,Container, Form, FormControl, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/ExpressWay.png'
import useAuth from '../../Firebase/useAuth';
const Hedaer = () => {

  const {user,logOut}=useAuth();

    return (
     
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"> <NavItem>   <Link  to="/"><img src={logo} alt="" /></Link> </NavItem> </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavItem >   <Link className="nav-link "   to="/home">Home</Link> </NavItem>
        <NavItem >   <Link className="nav-link "   to="/services">Our Services</Link> </NavItem >
        <NavItem >   <Link className="nav-link "   to="/contact">Contact Us</Link> </NavItem>
        <NavItem >   <Link className="nav-link "   to="/myorder">My Order</Link> </NavItem>
        <NavDropdown title="Admin" id="navbarScrollingDropdown">
          <NavDropdown.Item><Link className="nav-link " to="/managedelivery">Manage Delivery</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="nav-link " to="/addservice">Add Services</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="nav-link " to="/addblog">Add Blogs</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="nav-link " to="/aboutus">About Us</Link></NavDropdown.Item>
          
         

        </NavDropdown>
        <NavItem><Link className="nav-link text-danger " to="/"> {user.displayName}</Link></NavItem>
        <Navbar.Brand href="#"> <NavItem>   <Link  to="/"><img width="40px" className="rounded-circle" src={user.photoURL} alt="" /></Link> </NavItem> </Navbar.Brand>
      </Nav>
      
      {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      <Nav>
      <NavItem >   <Link className="nav-link "   to="/signup">Sign Up</Link> </NavItem>

      {user?.email ?
                            
                            <Button onClick={logOut} className="text-danger" variant="light"> Logout</Button> :
                            <Nav.Link as={Link} to="/signin"> Sign In</Nav.Link>}

      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Hedaer;