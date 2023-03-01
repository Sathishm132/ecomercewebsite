import { useParams } from "react-router-dom";
import Header from "../layouts/Navbar";

const ProductDetial=()=>{
    const {id}=useParams();
    console.log(id)
    return(
        <>
         <Header/>
         
       </>
      
    );

}
export default ProductDetial;