import { logo } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
    let [btnName, setBtnName] = useState("Login");
    return (
        <div className='header'>
            <div>
                <img className='logo' src={logo} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={()=>{btnName== "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;