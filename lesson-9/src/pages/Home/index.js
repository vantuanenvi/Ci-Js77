import {NavLink, Outlet} from 'react-router-dom'
import "./style.css"


function Home () {

    return (
        <div className='home-container'>
            <h1> X Store</h1>
            <div >
            <ul className='nav-container'>
                <li>
                    <NavLink to = "/products">Product</NavLink>
                </li>
                <li>
                    <NavLink to = "/invoices">Invoices</NavLink>
                </li>
                <li>
                    <NavLink to = "/cart">Cart</NavLink>
                </li>
                <li>
                    <NavLink to = "/about">About</NavLink>
                </li>
                <li>
                    <NavLink to = "profile">Profile</NavLink>
                </li>
            </ul>
            </div>
            <Outlet/>
        </div>
    )
}
export default Home