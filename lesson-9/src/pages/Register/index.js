import './style.css'
const Register = () => {
    return (
        <div className="register">
        <h2>Register</h2>
        <br/>
        <div className='register-form'>
            <input placeholder='User name' type='text'/>
        <br/>
        <input placeholder='Password' type='password'/>
        <br/>
        <input placeholder='Repeat Password' type='password'/>
        <br/>

        <button className='register-btn'>Register</button>
        </div>
        </div>
        
    )
}
export default Register;