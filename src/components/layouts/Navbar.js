import { remove } from "firebase/database";
import { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Authcontext from "../../store/Authcontext";
import Cart from "../cart/cart";


const Header = (props) => {
  const authcontx=useContext(Authcontext);
  const remove=()=>{

    authcontx.logout()
  }
  let logstatus;
  if(localStorage.getItem("token")){
    logstatus=<NavLink className={"nav-link"} onClick={remove} >
    logout
  </NavLink>
  }else{
    logstatus=<NavLink to="/signin" className={"nav-link"}>
    signin
  </NavLink>
  }

  
  return (
    <>
      <Navbar bg="info" sticky="top" expand="lg" >
        <Container>
          <Navbar.Brand>Sharpener Shop</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink to="/home" className={"nav-link"}>
                Home
              </NavLink>
              <NavLink to="/" className={"nav-link"}>
                store
              </NavLink>
              <NavLink to="/about" className={"nav-link"}>
                About
              </NavLink>
              <NavLink to="/contact" className={"nav-link"}>
                contactus
              </NavLink>
              {logstatus}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Cart />
      </Navbar>
    </>
  );
};
export default Header;
