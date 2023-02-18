import { Container } from "react-bootstrap";

const Product=props=>{
    return<>
    <Container>
    <ul>
        <img src={props.image}></img>
        <li>price={props.price}</li>
        <button>add</button>
    </ul>
    </Container>
  
    </>
}
export default Product;