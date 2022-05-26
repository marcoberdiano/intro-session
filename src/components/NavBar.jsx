import React, {useState} from 'react';
import logo from '../images/logo.svg'
import HamburgerMenu from './HamburgerMenu'
import NormalMenu from './NormalMenu'
import '../css/NavBar.css'
import iconMenu from '../images/icon-menu.svg'


const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);
   
    const handleMobileMenu = () => {
        setShowMenu(!showMenu);
    };
   

    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <img src={logo} alt={logo}></img>
                </div>
                <NormalMenu/>
                <div className='hamburger-menu' onClick={handleMobileMenu}>
                    <img src={iconMenu} alt={iconMenu}></img>
                </div>
                
            </div>
            { showMenu &&<HamburgerMenu onClick={handleMobileMenu}/>}
        </nav>  
      );
}
 
export default NavBar;