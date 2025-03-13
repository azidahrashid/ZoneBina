import React, { useState, useEffect } from "react";


import OpenLogin from "./OpenLogin";
import OpenLoginFront from "./OpenLoginFront";

function Login(props) {


    const [loginMode, setLoginMode] = useState("front");

    useEffect(() => {
        const mode = document.body.getAttribute("data-login") || "front";
        setLoginMode(mode);
    }, []);





	if (loginMode === "front") {
        return (
			<OpenLoginFront/> 
        );
    }
	
    if (loginMode === "back") {
        return (
            <OpenLogin/>
        );
    }
 
}


export default Login;