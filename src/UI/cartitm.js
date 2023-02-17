import { Fragment } from "react"
import classes from './cartitem.module.css';

const Cartitem=props=>{
    return<Fragment>
        <ul>
        <li>
                {props.title}
            </li>
            <li>
          <img className={classes.img} src={props.image}></img>
               
            </li>
            <div className={classes.ul}>
             price:{props.price}
            <button>add</button>
            </div>
           
        </ul>
    </Fragment>
}
export default Cartitem