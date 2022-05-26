import React, {useState} from "react";

import arrowUp from '../images/icon-arrow-up.svg'
import arrowDown from '../images/icon-arrow-down.svg'
import DropMenuFeatures from './DropMenuFeatures';
import DropMenuCompany from './DropMenuCompany';

const NavLinks = () => {

    const [showMenuFeatures, setshowMenuFeatures] = useState(false);
    const [showMenuCompany, setshowMenuCompany] = useState(false);

    const handleEventFeatures = () => {
        setshowMenuFeatures(!showMenuFeatures)
    }

    const handleEventCompany = () => {
        setshowMenuCompany(!showMenuCompany)
    }
    
    
    return ( 
        <div className='nav-links'>
                <div className="links">
                    <a className='dropDown'  onClick={handleEventFeatures}>
                        <span className='nav-title'>Features</span>
                        <img className='arrow' src={ showMenuFeatures ? arrowUp : arrowDown } alt={arrowDown}/>
                        { showMenuFeatures && <DropMenuFeatures/>}
                    </a>
                    
                    <a className='dropDown' onClick={handleEventCompany}>
                        <span className='nav-title'>Company</span>
                        <img className='arrow' src={ showMenuCompany ? arrowUp : arrowDown } alt={arrowDown}/>
                        {showMenuCompany &&<DropMenuCompany />}
                    </a>
                    <a className='nav-title'>Careers</a>
                    <a><span className='nav-title'>About</span></a>
                </div>
                <div className="login-register">
                    <a className='nav-title'>Login</a>
                    <a id="register" className='nav-title'>Register</a>
                </div>
            </div>
     );
}
 
export default NavLinks;