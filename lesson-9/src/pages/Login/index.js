import './style.css'
const Login = () => {
    return (
        <div className="login"> 
            <h2>Login</h2>
            <br/>
            <div className="form">
                <input type='text' placeholder="user name"></input>
                <br/>
                <input type='password' placeholder="password"></input>
                <br/>
            <button className="login-btn">Login</button>
            </div>
        </div>
       
        
    )
}
export default Login;