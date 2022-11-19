import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

function Auth() {
  return (
    <div className="container">
      <h2> X Store</h2>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/auth/login">
              <button>Login</button>
            </NavLink>
          </li>
          <li className="mg-t20">
            <NavLink to="/auth/register">
              <button>Register</button>
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
export default Auth;
