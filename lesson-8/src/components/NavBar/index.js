import React from "react";
import { useContext } from "react";
import { useState } from 'react';

import UserContext from "../UserContext";
import "./style.css";
function NavBar(props) {
  const userCtx = useContext(UserContext);
    
    

  return (
    <div className="nav-container">
    <UserContext.Consumer>
        {(userCtx) => {
            return(      
            <div className="nav">
            <div className="header">MindX</div>
            <div className="btn-container">
            { <button className="login-btn">Login</button>}
            {  <p>{userCtx.user}</p>}
            </div>
          </div>
          )

      }
      }
    </UserContext.Consumer>
    </div>
  );
}
export default NavBar;
