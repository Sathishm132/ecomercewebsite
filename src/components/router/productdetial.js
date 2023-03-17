import { useContext } from "react";
import { useParams } from "react-router-dom";
import Cartcontext from "../../store/context";
import Header from "../layouts/Navbar";

const ProductDetial=()=>{
    const ctx= useContext(Cartcontext)
    let {id}=useParams();
    console.log(id)
    
   
    return(
        <>
        <Header></Header>
      <p>{id}</p>
      
    

         
       </>
      
    );

}
export default ProductDetial;