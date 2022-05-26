import React from "react";

const DropMenuCompany = ({isHamburgerMenu}) => {
    return (  
        <ul className={!isHamburgerMenu ? 'dropDown-Content' : 'dropDown-Content-hamburger'}>
            <li className='dropDow-item-company'>
                
            <span>History</span>
            </li>
            <li className='dropDow-item-company'>
                
                <span>Our Team</span>
            </li>
            <li className='dropDow-item-company'>
                
                <span>Blog</span>
            </li>
        </ul>
    );
}
 
export default DropMenuCompany;