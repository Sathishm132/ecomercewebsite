
// import Fotter from "./components/layouts/footer";
// import Headerf from "./components/layouts/header";
// import Header from "./components/layouts/Navbar";
// import Item from "./components/products/itemlist";
// import {useState} from "react";
// import StaticExample from "./ui/modal";
// import Contextprovider from "./store/provider";

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutPage from "./components/router/Aboutpage";
import Authantication from "./components/router/Authantication";
import Contact from "./components/router/Contact";
import Home from "./components/router/Home";
import ProductDetial from "./components/router/productdetial";
import Store from "./components/router/store";

const routered=createBrowserRouter([
  {path:"/",
element:<Home/>},
  {path:"/store",
element:<Store/>,
childeren:[
  

]},
{path:"/about",
element:<AboutPage/>},
{
  path:"/contact",
  element:<Contact/>
},

{
  path:"store/:id",
  element:<ProductDetial/>
},
{
  path:"signin",
  element:<Authantication/>
},

  

  

])

function App() {
  // const [cartshow,setCartshow]=useState(false);
  // const carthandler=()=>{
  //   setCartshow(true)
  // }
  return (
   <>
   
   <RouterProvider router={routered}></RouterProvider>
   
   </>
   
  
   
   
  )
}

export default App;
