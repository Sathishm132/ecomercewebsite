import { Container, Form,} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {  useRef } from "react";
import Header from "../layouts/Navbar";


const Contact=()=>{
  
    const Name=useRef();
    const Email=useRef()
    const phone=useRef()
    const navigate=useNavigate()
            

    
  
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
      
      
       Name.current.value=null;
       Email.current.value=null;
       phone.current.value=null;
       navigate("/")
   
    
      
    }
    return(
        <>
        <Header/>
            
            
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
        <Form.Label>Phonenumber</Form.Label>
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