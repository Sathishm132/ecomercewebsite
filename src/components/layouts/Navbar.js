import { Container, Navbar,Nav } from "react-bootstrap"
import classes from './Navbar.module.css';
const Header=(props)=>{
    return<>
    <div className={classes.nav}>
        <header>
            <Navbar bg="success"  expand="lg" >
                <Container>
                <Navbar.Brand>Sharpener Shop</Navbar.Brand>
            

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            
            </Nav>
            </Navbar.Collapse>
            
            
                </Container>
                <button onClick={props.onclick}>Cart</button>

            </Navbar>
            
        </header>

    </div>
  
    </>
}
export default Header