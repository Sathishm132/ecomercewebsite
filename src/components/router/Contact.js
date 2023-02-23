import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect, useRef } from "react";


const Contact=()=>{
    const Name=useRef();
    const Email=useRef()
    const phone=useRef()
            

    
  
    const posthandler=(event)=>{
        event.preventDefault();
        const user={
            Name:Name.current.value,
            Email:Email.current.value,
            phone:phone.current.value,
        }
        fetch("https://react-http-dea87-default-rtdb.firebaseio.com/user.json",{
            method:"POST",
            body:JSON.stringify(user),
    
       })
    
      
    }
    return(
        <>
        <header>
     <Navbar className="mb-3" bg="success" fixed="top"   expand="lg" >
                <Container>
                <Navbar.Brand>Sharpener Shop</Navbar.Brand>
            

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            
            <NavLink to="#home">Home</NavLink>
            <NavLink to="/">store</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">contactus</NavLink>
            
            </Nav>
            </Navbar.Collapse>
            
            
                </Container>
               

            </Navbar>
            <br></br>
            </header>
            
            
            
    <Container className="mt-5">
                
    <Form className="mt-5">
    <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={Name} type="text" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          We'll never share your Name with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={Email}type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={phone} type="number" placeholder="ph-number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={posthandler}>
        Submit
      </Button>
    </Form>
            </Container>
               






            
        </>
    )
}
export default Contact;