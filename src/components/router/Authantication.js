import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';




const Authantication = () => {
  const enteredemail=useRef();
  const enteredpassword=useRef();
  const navigate=useNavigate();
  

  const submithandler=()=>{
   
    
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCR5rUw0Y_wizK-phDVLRRJ7mQ2qYxa0g",{
      method:"POST",
      body:JSON.stringify({
        email:enteredemail.current.value,
        password:enteredpassword.current.value,
        returnSecureToken:true,
      }),
      headers:{
        "Content-type":"application/json"
      }
      }).then((res)=>{
        if(res.ok){
          return res.json()
  
        }else{
          return res.json().then((data)=>{
            let Errormessage="Authentication failed";
            // if(data&&data.error&&data.error.message){
            //   Errormessage=data.error.message
           // } 
           throw new Error(Errormessage) 
           
          })
        }
      }).then((data)=>{
        console.log(data);
        navigate("/store")

        
       
  
      }).catch((err)=>{
        alert(err.message)
  
  
      })
  }
  return(
    <Container>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={enteredemail} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={enteredpassword} />
      </Form.Group>
      <Button onClick={submithandler}>signin</Button>
    </Form>
    </Container>
    


  
  )
}

export default Authantication