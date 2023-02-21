
import Fotter from "./components/layouts/footer";
import Headerf from "./components/layouts/header";
import Header from "./components/layouts/Navbar";
import Item from "./components/products/itemlist";
import {useState} from "react";
import StaticExample from "./ui/modal";
import Contextprovider from "./store/provider";




function App() {
  const [cartshow,setCartshow]=useState(false);
  const carthandler=()=>{
    setCartshow(true)
  }
  return (
   <>
   <Contextprovider>

   <Header onclick={carthandler}/>

   <div>
   <Headerf/>
    <Item/></div>
   
 
   {cartshow&& <StaticExample/>}
   
   
   <Fotter/>
   </Contextprovider>
   
   </>
   
  
   
   
  )
}

export default App;
