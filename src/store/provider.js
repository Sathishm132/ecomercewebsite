import Cartcontext from "./context";
const cartcontext={

}
const contextprovider=(props)=>{
    return(
        <Cartcontext.Provider value={cartcontext}>
            {props.children}
        </Cartcontext.Provider>
    )

}
export default contextprovider; 