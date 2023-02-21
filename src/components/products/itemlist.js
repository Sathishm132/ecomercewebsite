import {  Container,} from "react-bootstrap";
import Product from "./product";
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

const Item=props=>{
    const productlist=productsArr.map((item)=>(<Product
    title={item.title}
    price={item.price}
    image={item.imageUrl}
    amount={1}/>));
    return <>
    <Container>
        
    <ul className="d-flex flex-wrap">
        {productlist}
    </ul>
    </Container>
    
        
            
            
        
       
    
    </>

}
export default Item;