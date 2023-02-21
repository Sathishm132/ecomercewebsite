import { useContext } from "react";
import {  Card,Button } from "react-bootstrap";
import Cartcontext from "../../store/context";

const Product=props=>{
    const cntx=useContext(Cartcontext)
    const additem=()=>{
        cntx.additem({
            image:props.image,
            title:props.title,
            price:props.price,
            amount:props.amount
        })
    }
    return<>
    
    
    <Card style={{ width: '18rem' }} className="m-5 p-1">
    <Card.Title>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
       <ul>
        <h4>price={props.price}Rs</h4>
        <Button variant="primary" onClick={additem}>Add</Button>
       </ul>
        
       
      </Card.Body>
    </Card>
    
    
  
    </>
}
export default Product;