import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";

import "./style.css";

function NavBar() {
  const [textLogin, setTextLogin] = useState('Đăng nhập');
  const { isLogin, setIsLogin, language, setLanguage, userName, setUserName } = useContext(UserContext);
  
  useEffect(() => {
    if (!isLogin) {
      if (language == 'VN') {
        setTextLogin('Đăng nhập');
      } else {
        setTextLogin('Login');
      }
    } else {
      if (language == 'VN') {
        setTextLogin(`Xin Chào, ${userName}`);
      } else {
        setTextLogin(`Welcome, ${userName}`);
      }
    }
  }, [isLogin, language]);

  return (
    <div className="nav">
              <div className="heading">MindX</div>
              <div className="btn-container">
                <button className="login-btn">{textLogin}</button>
              </div>
    </div>
  );
}
export default NavBar;
