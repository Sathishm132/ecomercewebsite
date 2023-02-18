import { Container } from "react-bootstrap"
import clasess from './header.module.css';
const Headerf=props=>{
    return<>
    <div className={clasess.header}>
    <Container>
        <h1>
            The Generics
        </h1>
    </Container>
    </div>
   
    </>
}
export default Headerf
