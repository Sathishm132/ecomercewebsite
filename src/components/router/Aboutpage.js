import { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"



const AboutPage=()=>{
    const[movies,setMovies]=useState([]);
    const fetchhandler=()=>{
       
        fetch("https://swapi.py4e.com/api/").then(
            (response)=>{
                return response.json();
            }).then((data)=>{
                const array=data.flims.map(item=>{
                    return {
                        item:item
                    };
                });
                return setMovies(array);
            });
                
        
    };
    return(
     <>
     
     <div>
     <Navbar bg="success" fixed="top"  expand="lg" >
                <Container>
                <Navbar.Brand>Sharpener Shop</Navbar.Brand>
            

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/">store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            
            </Nav>
            </Navbar.Collapse>
            
            
                </Container>
                
                

            </Navbar>
            
           
            </div>
            <div className="mt-5">
                <button onClick={fetchhandler}>movies</button>
            {<Container>
                <h1>dh`undm-wg9d983mi</h1>
                <p>vy`f27dvt29ogdngoihj
                    d2`8ue9yfrhg27y8
                    wnbhde72gt3r8g72
                    sij9`u8379r8`2jsdwiuy7deiu3
                    1e8u27t34e8u3hbe</p></Container>}
                 {movies}
            </div>
            
            <footer>
                <h1>contact</h1>
            </footer>
          
     </>


    )
    


}
export default AboutPage