
// import Fotter from "./components/layouts/footer";
// import Headerf from "./components/layouts/header";
// import Header from "./components/layouts/Navbar";
// import Item from "./components/products/itemlist";
// import {useState} from "react";
// import StaticExample from "./ui/modal";
// import Contextprovider from "./store/provider";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutPage from "./components/router/Aboutpage";
import Contact from "./components/router/Contact";
import Store from "./components/router/store";

const routered=createBrowserRouter([
  {path:"/",
element:<Store/>},
{path:"/about",
element:<AboutPage/>},
{
  path:"/contact",
  element:<Contact/>
}
])

function App() {
  // const [cartshow,setCartshow]=useState(false);
  // const carthandler=()=>{
  //   setCartshow(true)
  // }
  return (
   <>
   {/* <Contextprovider>

   <Header onclick={carthandler}/>

   <div>
   <Headerf/>
    <Item/></div>
   
 
   {cartshow&& <StaticExample/>}
   
   
   <Fotter/>
   </Contextprovider> */}
   <RouterProvider router={routered}></RouterProvider>
   
   </>
   
  
   
   
  )
}

export default App;
