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
          <Nav className="bg-dark p-3 m-3 d-fex">
            
            <NavLink to="#home" >Home</NavLink>
            <NavLink to="/store">store</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">contactus</NavLink>
            <NavLink to="/signin">signin</NavLink>


         
            </Nav>
            </Navbar.Collapse>
            
            
                </Container>
                <Modal/>

            </Navbar>
            


    
  
    </>
}
export default Header;