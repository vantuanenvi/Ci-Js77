import { React, useState, useEffect, useContext } from "react";

import {UserContext} from "../UserContext";
import "./style.css";

function Login() {
  const [header, setHeader] = useState(' Đăng nhập');
  const [logOutText, setLogOutText] = useState('Đăng Xuất');
  const { isLogin, setIsLogin, language, setLanguage, userName, setUserName } 
  = useContext(UserContext);
  const [longInNotice, setLogInNotice] = useState('');
  const [name, setName] = useState('');
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLogin() {
    if (name == "") {
      if (language == "VN") {
        alert("Vui lòng điền username");
      } else {
        alert("Please write username");
      }
    } else {
      setUserName(name);
      setIsLogin(true);
      setName("");
    }
  }

  function handleLogout() {
    setIsLogin(false);
  
  }

  useEffect(() => {
    if (!isLogin) {
      if (language == 'VN') {
        setHeader('Đăng Nhập')
      } else {
        setHeader('Login')
      }
    } else {
      if(language == 'VN')
      { 
      setLogOutText("Đăng Xuất")
      setLogInNotice('Xin Chào, Tôi là một lập trình viên web')
      } else{
      setLogOutText('Logout')
      setLogInNotice('Hello world, I am a web developer')
    }
    }
  }, [isLogin, language])

  return (
    <div className="form-container">
      {!isLogin && (
        <form className="form-login">
          <h3 className="form-header">{header}</h3>
          <hr />
          <div className="mg-16">
            <input
              onChange={handleNameChange}
              className="input"
              placeholder="Username..."
            ></input>
          </div>
          <div className="mg-16">
            <button onClick={handleLogin} className="sign-in-btn">
              {header}
            </button>
          </div>
        </form>
      )}
      {isLogin && <div className="welcome-container">
          <div className="login-notice">{longInNotice}</div>
          <button onClick={handleLogout} className="logout-btn">{logOutText}</button>
        </div>
      }
    </div>
  );
}
export default Login;
