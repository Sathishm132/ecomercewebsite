import React, { createContext } from "react";
const Cartcontext=createContext({
    items:[],
    totalAmount:0,
    additem:(item)=>{},
    removeitem:(id)=>{}
})
   
  

export default Cartcontext;