import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import"../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Authprovider } from './store/Authcontext';

import Contextprovider from './store/provider';
import "bootstrap-icons/font/bootstrap-icons.css";  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Authprovider><Contextprovider><App /></Contextprovider></Authprovider>
);
