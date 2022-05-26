import React from "react";
import NavLinks from "./NavLinks";
import iconCloseMenu from '../images/icon-close-menu.svg'

const HamburgerMenu = (props) => {
    return (
       
            
            <div className="nav-links-hambuger">
                <div className='hamburger-menu-close' onClick={props.onClick}>
                    <img src={iconCloseMenu} alt={iconCloseMenu}></img>
                </div>
                <NavLinks isHamburgerMenu={true}></NavLinks>
            </div>
        
     );
}
 
export default HamburgerMenu;