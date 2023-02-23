import { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"



const AboutPage=()=>{
   
    return(
     <>
     
     <div>
     <Navbar bg="success" fixed="top"  expand="lg" >
                <Container>
                <Navbar.Brand>Sharpener Shop</Navbar.Brand>
            

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            
            <NavLink to ="#home" >Home</NavLink>
            <NavLink to ="/">store</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">contactus</NavLink>
            
            
            </Nav>
            </Navbar.Collapse>
            
            
                </Container>
                
                

            </Navbar>
            
           
            </div>
            <div className="mt-5">
             
            {<Container>
                <h1>dh`undm-wg9d983mi</h1>
                <p>vy`f27dvt29ogdngoihj
                    d2`8ue9yfrhg27y8
                    wnbhde72gt3r8g72
                    sij9`u8379r8`2jsdwiuy7deiu3
                    1e8u27t34e8u3hbe</p></Container>}
                 
            </div>
            
            <footer>
                <h1>contact</h1>
            </footer>
          
     </>


    )
    


}
export default AboutPage