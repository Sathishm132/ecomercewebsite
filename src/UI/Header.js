import { Fragment } from "react";
import Cartbutton from "./cartbutton";
import classes from './Header.module.css'

const Header=props=>{
    return<Fragment>
        <header className={classes.header}>
            <a>Home</a>
            <a>store</a>
            <a>About</a>
            <Cartbutton/>
         
            </header>
            
        
    </Fragment>

}
export default Header;