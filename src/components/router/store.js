



import {useState} from "react";


import Fotter from "../layouts/footer";
import Header from "../layouts/Navbar";
import Headerf from "../layouts/header";
import Item from "../products/itemlist";
import Contextprovider from "../../store/provider";
const Store=()=>{
    const [cartshow,setCartshow]=useState(false);
    const carthandler=()=>{
      setCartshow(true)
    }
    return(
        <>
 <Contextprovider>

<Header onclick={carthandler}/>

<div>
<Headerf/>
 <Item/></div>





<Fotter/>
</Contextprovider>
        </>
    )
}
export default Store