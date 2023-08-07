import React from 'react';
import './about.css'
import Me from '../../assets/MyPic3.png'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={Me} alt="About Image" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <FiAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>1 year</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>2</small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFolderOpen className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+</small>
                        </article>
                    </div>
                    <p> Hello, my name is Nicholas Ahlman and I am a passionate and dedicated web developer. With a strong foundation in coding and problem-solving, I strive to create dynamic and functional websites that deliver a seamless user experience. My journey into web development began with a curiosity for technology and a desire to create meaningful online experiences while also challenging and stimulating my brain. Over the past year, I have honed my skills in front-end and back-end development, as well as database management, allowing me to build robust and efficient web applications. I have a deep appreciation for the power of clean and well-structured code and look forward to improving and refining my skills for the rest of my life.                 
                    </p>
                   
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;