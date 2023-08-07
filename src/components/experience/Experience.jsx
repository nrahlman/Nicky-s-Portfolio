import React from 'react';
import './experience.css';
import { AiOutlineCheckSquare } from 'react-icons/ai';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckSquare className='experience__detail-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Proficient</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <AiOutlineCheckSquare className='experience__detail-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Proficient</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <AiOutlineCheckSquare className='experience__detail-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Proficient</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <AiOutlineCheckSquare className='experience__detail-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Proficient</small>
              </div>
              
              
            </article>
          </div>
        </div>
        <div className="experienc__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <AiOutlineCheckSquare className='experience__detail-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Proficient</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <AiOutlineCheckSquare className='experience__detail-icon'/>
              <div>
                <h4>PSQL</h4>
                <small className='text-light'>Proficient</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <AiOutlineCheckSquare className='experience__detail-icon'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Proficient</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <AiOutlineCheckSquare className='experience__detail-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Familiar</small>
              </div>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
