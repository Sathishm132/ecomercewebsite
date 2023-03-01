import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect, useRef } from "react";


const Contact=()=>{
  const navigate=useNavigate();
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
       console.log(user)
       Name.current.value=null;
       Email.current.value=null;
       phone.current.value=null;
       navigate("/");
    
      
    }
    return(
        <>
        <header>
     <Navbar className="mb-3" bg="success" fixed="top"   expand="lg" >
                <Container>
                <Navbar.Brand>Sharpener Shop</Navbar.Brand>
            

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-between">
            
            <NavLink to="#home" className="m-2 text-dark">Home</NavLink>
            <NavLink to="/"  className="m-2">store</NavLink>
            <NavLink to="/about"  className="m-2">About</NavLink>
            <NavLink to="/contact"  className="m-2">contactus</NavLink>
            
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
        <Form.Control ref={phone} type="tel" placeholder="ph-number" />
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