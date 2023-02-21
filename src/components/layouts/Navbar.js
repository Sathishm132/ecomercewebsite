import { Container, Navbar,Nav } from "react-bootstrap"
import Modal from "../../ui/modal";


const Header=(props)=>{
    
    return<>
     
            <Navbar bg="success" fixed="top"  expand="lg" >
                <Container>
                <Navbar.Brand>Sharpener Shop</Navbar.Brand>
            

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
            </Nav>
            </Navbar.Collapse>
            
            
                </Container>
                <Modal/>

            </Navbar>
            


    
  
    </>
}
export default Header;