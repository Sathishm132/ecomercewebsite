import { useContext } from "react"


import Cartcontext from "../../store/context"

import Cartitems from "./cartitem"

const Cart=props=>{
    const cntx=useContext(Cartcontext)
    const additemhandler=(item)=>{
        cntx.additem({...item,amount:1})
            
    }
    const removeitemhandler=(id)=>{
        cntx.removeitem(id);
    }
    const totalAmount=cntx.totalAmount;
    const cartitemlist=cntx.items.map((item)=>(<ul>
    
       
        <Cartitems
        title={item.title}
        image={item.image}
        price={item.price}
        amount={item.amount}
       
        onadd={additemhandler.bind(null,item)}
        onremove={removeitemhandler.bind(null,item.title)}
        ></Cartitems>
    </ul>));
   
    return<>
    {cartitemlist}
    <h2>{`TotalAmount=${totalAmount}`}</h2>
    </>
   
    
    
    
}
export default Cart;