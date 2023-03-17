import  { createContext } from "react";
const Cartcontext=createContext({
    items:[],
    totalAmount:7,
    additem:(item)=>{},
    removeitem:(id)=>{}
})
   
  

export default Cartcontext;