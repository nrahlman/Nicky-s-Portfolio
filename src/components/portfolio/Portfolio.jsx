import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/Project1.png'
import IMG2 from '../../assets/Project2.png'
import IMG3 from '../../assets/Project3.png'
import IMG4 from '../../assets/Project4.png'
import IMG5 from '../../assets/Project5.png'
import IMG6 from '../../assets/GlobalObject.png'

const Portfolio = () => {
    return (
        <section id='services'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG4} alt="Fitmate" />
                </div>
                <h3>El Charro Mexican Food</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/nrahlman/El__Charro" className='btn' target='_blank'>Github</a>
                <a href="https://elcharromexicanfood.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG5} alt="Fitmate" />
                </div>
                <h3>Furnishings & Co.</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/furnishings-and-co/furnishing" className='btn' target='_blank'>Github</a>
                <a href="https://still-tree-1700.fly.dev/" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG1} alt="Fitmate" />
                </div>
                <h3>Fitmate</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/nrahlman/FitnessFrontEnd" className='btn' target='_blank'>Github</a>
                <a href="https://fitmate-app.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG2} alt="Coffee Clicker" />
                </div>
                <h3>Coffee Clicker</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/nrahlman/CoffeeClicker" className='btn' target='_blank'>Github</a>
                <a href="https://coffeeclicker22.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG3} alt="Tic-Tac-Toe" />
                </div>
                <h3>Arcade Games</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/nrahlman/Tic-Tac-Toe" className='btn' target='_blank'>Github</a>
                <a href="https://tictactoe1122.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG6} alt="Fitmate" />
                </div>
                <h3>Global Object Company</h3>
                <div className="portfolio__item-cta">
                <a href="" className='btn' target='_blank'>Github</a>
                <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio