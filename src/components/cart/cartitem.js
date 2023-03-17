




const Cartitems=props=>{
 
    
    return<>
    <ul  className="text-bg-light border border-circle">
        <img className="align-center" src={props.image} alt="imag" style={{width:"12rem",height:"6rem"} }></img>
        <h2 className="text-dark">{props.title}</h2>
        <h2 className="text-danger">price={props.price}</h2>
        <h2 className="text-success">quantity={props.amount}</h2>
        <div>
        <button onClick={props.onadd}>+</button>
        <button onClick={props.onremove}>-</button>
        </div>
        
    </ul>
    
        
        
    </>
}
export default Cartitems