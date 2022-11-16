import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

import "./style.css";

function Footer() {
  const { isLogin, setIsLogin, language, setLanguage, userName, setUserName } =
    useContext(UserContext);
  function handOnChange(e) {
    setLanguage(e.targe.value);
  }

  return (
    <div className="footer">
      <select onChange={handOnChange} className="select-language">
        <option value="VN">VN</option>
        <option value="EN">EN</option>
      </select>
    </div>
  );
}
export default Footer;
