



import {useState} from "react";


import Fotter from "../layouts/footer";
import Header from "../layouts/Navbar";
import Headerf from "../layouts/header";
import Item from "../products/itemlist";
import Contextprovider from "../../store/provider";
const Store=()=>{
    

    return(
        <>
 <Contextprovider>

<Header/>

<div>
<Headerf/>
 <Item/></div>





<Fotter/>
</Contextprovider>
        </>
    )
}
export default Store