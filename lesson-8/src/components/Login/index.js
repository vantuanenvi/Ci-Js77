import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../UserContext";
import './style.css'

function Login () {
    const [toggleWelcome, setToggleWelcome] = useState(false)
    

    const userCtx = useContext(UserContext);
    const changeUserContext = (e) => {
        userCtx.setUser(e.target.value)
        
    }
    
    const handleSubmit = () =>{
        
       
      
    }
    return(
        <div>
        
        <div className="form-container">
  
            <form className="form-login">
                <h3 className="form-header"> Đăng nhập</h3>
                <hr/>
                <div className="mg-16">
                    <input  onChange={changeUserContext} className="input" placeholder="Username..."></input>
                </div>
                
                <div className="mg-16">
                    <button onClick={handleSubmit} className="sign-in-btn">Đăng nhập</button>
                </div>
                </form>
                </div>
            
    
          
            </div>
       
    
    )
}
export default Login