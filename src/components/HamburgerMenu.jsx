import React from "react";
import NavLinks from "./NavLinks";

const HamburgerMenu = () => {
    return (
        <div className="nav-links-hambuger">
            <NavLinks isHamburgerMenu={true}></NavLinks>
        </div>
     );
}
 
export default HamburgerMenu;