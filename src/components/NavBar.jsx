import React, {useState, useEffect} from 'react';
import logo from '../images/logo.svg'
import NormalMenu from './NormalMenu';
import HamburgerMenu from './HamburgerMenu';
import '../css/NavBar.css'
import iconMenu from '../images/icon-menu.svg'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(true);
    const [toggleMenu, setToogleMenu] = useState(false);

    const checkSize=() => {
        window.innerWidth > 1100 ? setShowMenu(true): setShowMenu(false);
    }

    


    useEffect(()=>{
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize',checkSize)
          }
    }, [])


    return (
        <div>
            <nav className='nav-container'>
                <div className='logo'>
                    <img src={logo} alt={logo}></img>
                </div>
                {showMenu && <NormalMenu/>}
                {!showMenu && <div>
                    <img src={iconMenu} alt={iconMenu}></img>
                </div>}
            </nav>
            {!showMenu && <HamburgerMenu/>}    
        </div>


        
      );
}
 
export default NavBar;