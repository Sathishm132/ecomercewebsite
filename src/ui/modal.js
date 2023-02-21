import { Offcanvas ,Button, Badge } from "react-bootstrap"
import { useState,useContext } from "react"
import Cartcontext from "../store/context";



import Cart from "../components/cart/cart";

const Modal=props=>{
  const contx=useContext(Cartcontext);
  const totalcartitems=contx.items.length;

    const [show,setShow]=useState(false);
    return  <>
    <Button variant="primary" onClick={()=>{setShow(true)}} className="me-2">
    <span>Cart</span>
    <Badge>{totalcartitems}</Badge>
    
    </Button>
    <Offcanvas show={show} onHide={()=>{setShow(false)}} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <Cart/>
      </Offcanvas.Body>
    </Offcanvas>
  </>
}
export default Modal;