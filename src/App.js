
import Cart from "./components/cart/cart";
import Fotter from "./components/layouts/footer";
import Headerf from "./components/layouts/header";
import Header from "./components/layouts/Navbar";
import Item from "./components/products/itemlist";
import {useState} from "react";
import StaticExample from "./ui/modal";




function App() {
  const [cartshow,setCartshow]=useState(false);
  const carthandler=()=>{
    setCartshow(true)
  }
  return (
   <>
   <Header onclick={carthandler}/>

   
   <Headerf/>
 
   {cartshow&& <StaticExample/>}
   
   <Item/>
   <Fotter/>
   
   </>
   
  
   
   
  )
}

export default App;
