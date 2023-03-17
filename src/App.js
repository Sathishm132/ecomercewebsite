
// import Fotter from "./components/layouts/footer";
// import Headerf from "./components/layouts/header";
// import Header from "./components/layouts/Navbar";
// import Item from "./components/products/itemlist";
// import {useState} from "react";
// import StaticExample from "./ui/modal";
// import Contextprovider from "./store/provider";


import { createBrowserRouter,redirect,RouterProvider, useNavigate, useNavigation, } from "react-router-dom";
import Cart from "./components/cart/cart";
import Cartitems from "./components/cart/cartitem";
import AboutPage from "./components/router/Aboutpage";
import Authantication from "./components/router/Authantication";
import Contact from "./components/router/Contact";
import Home from "./components/router/Home";
import ProductDetial from "./components/router/productdetial";

import Store from "./components/router/store";

import Contextprovider from "./store/provider";





function App() {
  // const [cartshow,setCartshow]=useState(false);
  // const carthandler=()=>{
  //   setCartshow(true)
  // }
  
  const routered=createBrowserRouter([
    {path:"/",
  element:<Store/>,
  loader:()=>{
    if(localStorage.getItem("token")){
      return true
    }else{
      return redirect("signin")
    }
  }
    },
    {path:"/home",
    element:<Home/>,
   
    },
  {
    path:"signin",
    element:<Authantication/>
  },
  {
    path:"/:id",
    element:<ProductDetial/>
  },
  {path:"/about",
  element:<AboutPage/>},
  {
    path:"/contact",
    element:<Contact/>
  },
  
  
  
   
    
  
  
  
    
  
    
  
  ])
  return (
   <>
 
   <RouterProvider router={routered}></RouterProvider>
   </>
   
  
   
   
  )
}

export default App;
