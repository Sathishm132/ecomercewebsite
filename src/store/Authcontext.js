import React, { createContext, useState } from 'react'
;

const Authcontext=createContext(
    {
        token:"",
        islogin:false,
        login:(token)=>{},
        logot:()=>{}
    }
);
 export const Authprovider=(props)=>{
   
    const[token,setToken]=useState(null);
    const userlogin=!!token;
    const loginhandler=(token,email)=>{
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("email",email)

    }
    const logouthandler=()=>{
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email")
       
    }
    const authcontx={
        token:token,
        islogin:userlogin,
        login:loginhandler,
        logout:logouthandler,
    }
    return<Authcontext.Provider value={authcontx}>{props.children}</Authcontext.Provider>
 }
export default Authcontext;

