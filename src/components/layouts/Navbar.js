import { Container, Navbar,Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import Modal from "../../ui/modal";


const Header=(props)=>{
    
    return<>
     
            <Navbar bg="success" fixed="top"  expand="lg" >
                <Container>
                <Navbar.Brand>Sharpener Shop</Navbar.Brand>
            

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            
            <NavLink to="#home">Home</NavLink>
            <NavLink to="#link">store</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">contactus</NavLink>
            
            </Nav>
            </Navbar.Collapse>
            
            
                </Container>
                <Modal/>

            </Navbar>
            


    
  
    </>
}
export default Header;