import React from 'react';
import CTA from './CTA';
import './header.css'
import HeaderSocials from './HeaderSocials';
import Me from '../../assets/MyPic.png'
import Me2 from '../../assets/ProfilePic.jpg'


const Header = () => {
    return (
      <header>
        <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Nicholas Ahlman</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
        <img className='img' src={Me2} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    );
};

export default Header;