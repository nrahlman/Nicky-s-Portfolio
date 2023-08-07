import React from 'react';
import Resume from '../../assets/Resume.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a target="_blank" href= {Resume} className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            
        </div>
    );
};

export default CTA;