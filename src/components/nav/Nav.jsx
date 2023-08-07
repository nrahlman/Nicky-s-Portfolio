import React from 'react';
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {GiBlackBook} from 'react-icons/gi'
import {MdOutlineDesignServices} from 'react-icons/md'
import {MdOutlineContactless} from 'react-icons/md'
import {FaRegHandshake} from 'react-icons/fa'
import { useState } from 'react';


const Nav = () => {
    const [active, setActive]=useState('#')
    return (
        <nav>
            <a href="#" onClick={()=> setActive('#')} className={active=== '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={()=> setActive('#about')} className={active=== '#about' ? 'active' : ''}><BiUser /></a>
            <a href="#experience" onClick={()=> setActive('#experince')} className={active=== '#experience' ? 'active' : ''}><GiBlackBook /></a>
            <a href="#services" onClick={()=> setActive('#services')} className={active=== '#services' ? 'active' : ''}><MdOutlineDesignServices /></a>
            <a href="#testimonials" onClick={()=> setActive('#testimonials')} className={active=== '#testimonials' ? 'active' : ''}><FaRegHandshake /></a>
            <a href="#contact" onClick={()=> setActive('#contact')} className={active=== '#contact' ? 'active' : ''}><MdOutlineContactless /></a>
            
        </nav>
    );
};

export default Nav;