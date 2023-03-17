
import { useContext,  useState } from "react";
import { Badge, Button, Offcanvas } from "react-bootstrap";
import Cartcontext from "../../store/context";
import Cartitems from "./cartitem";

const Cart = (props) => {

  const [show, setShow] = useState(false);
  const cntx = useContext(Cartcontext);
  const totalitems=cntx.items.reduce((currNumber,items)=>{
    return currNumber+items.amount;
},0)
  const additemhandler = (item) => {
    cntx.additem({ ...item, amount: 1 });
    
  };
  const removeitemhandler = (id) => {
    cntx.removeitem(id);
  };
  const totalAmount = cntx.totalAmount;
  const cartitemlist = cntx.items.map((item) => (
    <ul key={item._id} >
      <Cartitems
        title={item.title}
        image={item.image}
        price={item.price}
        amount={item.amount}
        id={item._id}
        onadd={additemhandler.bind(null, item)}
        onremove={removeitemhandler.bind(null, item.id)}
      ></Cartitems>
    </ul>
  ));

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setShow(true);
        }}
        className="me-2"
      >
        <span><i className="bi bi-cart-fill"></i></span>
        <Badge>{totalitems}</Badge>
      </Button>
      <Offcanvas
        show={show}
        onHide={() => {
          setShow(false);
        }}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartitemlist}
          <h2>{`TotalAmount=${totalAmount}`}</h2>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Cart;
