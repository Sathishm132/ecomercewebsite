import { Fragment } from "react"
import List from "../components/cartlist";
import classes from './container.module.css';


const Container=props=>{
    return <Fragment>
        <div>
            <header className={classes.headertwo}>
            <h1> sharpener </h1>
            </header>
            
           <List></List>
            
            <header className={classes.bottum}>
                <h1>thankyou</h1>
            </header>
        </div>
    </Fragment>
}
export default Container;