import React from 'react';
import './header.css'
import banner from '../../images/social-banner.png'

const Header = () => {
    return (
        <div className='banner'>
            <img className='banner-img' src={banner} alt="" />
        </div>
    );
};

export default Header;