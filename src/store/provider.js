
import { useReducer } from "react";
import Cartcontext from "./context";

const DefaultValue={
    items:[],
    totalAmount:0,
    
}
const CartReducer=(state,action)=>{
    if(action.type==="Add"){
      
        const updatedamount=state.totalAmount+action.item.price*action.item.amount;
        console.log(state.totalAmount);
        
        const exisistingindex=state.items.findIndex((item)=>item.title===action.item.title);
        const existingitem=state.items[exisistingindex]
        let updatedcart;
        if(existingitem){
            const updateditem={
                ...existingitem,
                amount:existingitem.amount+action.item.amount
            }
            updatedcart=[...state.items]
            updatedcart[exisistingindex]=updateditem;
           
        }else{
            updatedcart=state.items.concat(action.item);
        }
         
           
        return{
            items:updatedcart,
            totalAmount:updatedamount,
        }
    }

    if(action.type==="Remove"){
        const existingindex=state.items.findIndex((item)=>(item.title===action.id));
        const existingitem=state.items[existingindex];
        let updateditems;
       let updatedamount;
        if(existingitem && existingitem.amount===1){
            
            updateditems=state.items.filter((item)=>(item.title!==action.id))
        }
        else{
            const updateditem={...existingitem,amount:existingitem.amount-1};
            updateditems=[...state.items];
            updateditems[existingindex]=updateditem;
            updatedamount=state.totalAmount-updateditem.price;
            
        }
        return {
            items:updateditems,
            totalAmount:updatedamount
        }
     
    }
    return DefaultValue;
}

const Contextprovider=(props)=>{
    const[cartstate,dispatch]=useReducer(CartReducer,DefaultValue);
    
    const additemhandler=(item)=>{
        dispatch({type:"Add",item:item})
       

    }
    const removeitemhandler=(id)=>{
        dispatch({type:"Remove",id:id})
      

    }
    const cartcontext={
       items:cartstate.items,
       totalAmount:cartstate.totalAmount,
       additem:additemhandler,
       removeitem:removeitemhandler,
       
        
    
    }
    return(
        
        <Cartcontext.Provider value={cartcontext}>
            {props.children}
        </Cartcontext.Provider>
    )

}
 export default Contextprovider; 