import axios from "axios";
import {  useEffect, useReducer, } from "react";

import Cartcontext from "./context";

const DefaultValue = {
  items: [],
  totalAmount: 0,
};
const email = localStorage.getItem("email");
let user;
if (email) {
  user = email.replace(/[^a-zA-Z ]/g, "");
}
const CartReducer = (state, action) => {
  if (action.type === "replace") {
    const TotalAmount = action.items.reduce((currNumber, items) => {
      return currNumber + items.amount * items.price;
    }, 0);
    return {
      items: action.items,
      totalAmount: TotalAmount,
    };
  }

  if (action.type === "Add") {
    const updatedamount =
      state.totalAmount + action.item.price * action.item.amount;
    //console.log(state.totalAmount);
    //console.log(state.items)

    const exisistingindex = state.items.findIndex(
      (item) => item.title === action.item.title
    );
    const existingitem = state.items[exisistingindex];
    let updatedcart;
    if (existingitem) {
      const updateditem = {
        ...existingitem,
        amount: existingitem.amount + action.item.amount,
      };
      updatedcart = [...state.items];
      updatedcart[exisistingindex] = updateditem;
      console.log(action.item._id);
      console.log(user);
      axios.put(
        `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/${user}/${action.item.id}.json`,
        updateditem
      );
    } else {
      updatedcart = state.items.concat(action.item);
      axios.post(
        `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/${user}.json`,
        action.item
      );
    }

    return {
      items: updatedcart,
      totalAmount: updatedamount,
    };
  }

  if (action.type === "Remove") {
    const existingindex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingitem = state.items[existingindex];
    let updateditems;
    let updatedamount;
    if (existingitem && existingitem.amount === 1) {
      updateditems = state.items.filter((item) => item.id !== action.id);
      if(state.totalAmount>0){
        updatedamount =state.totalAmount-existingitem.price
      }
    
    
      axios.delete(
        `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/${user}/${action.id}.json`
      );
    } else {
      const updateditem = { ...existingitem, amount: existingitem.amount - 1 };
      updateditems = [...state.items];
      updateditems[existingindex] = updateditem;
      updatedamount = state.totalAmount - updateditem.price;
      axios.put(
        `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/${user}/${action.id}.json`,
        updateditem
      );
    }
    return {
      items: updateditems,
      totalAmount: updatedamount,
    };
  }
  return DefaultValue;
};

const Contextprovider = (props) => {
  const [cartstate, dispatch] = useReducer(CartReducer, DefaultValue);


  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/${user}.json`
      );
      let fetchdata = [];
      for (let key in response.data) {
        fetchdata.push({ ...response.data[key], id: key });
      }
      
      dispatch({ type: "replace", items: fetchdata })
    
    };
    fetch();
    
    
  }, []);

  const additemhandler = (item) => {
    dispatch({ type: "Add", item: item });
  };
  const removeitemhandler = (id) => {
    dispatch({ type: "Remove", id: id });
  };
  const cartcontext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    additem: additemhandler,
    removeitem: removeitemhandler,
  };
  return (
    <Cartcontext.Provider value={cartcontext}>
      {props.children}
    </Cartcontext.Provider>
  );
};
export default Contextprovider;
