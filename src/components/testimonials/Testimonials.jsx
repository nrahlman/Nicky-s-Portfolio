import './testimonials.css'
import IMG1 from '../../assets/Testimonial1.png'
import IMG2 from '../../assets/Testimonial2.png'
import IMG3 from '../../assets/Testimonial3.png'
import IMG4 from '../../assets/Freyman.png'

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";



import { Pagination } from "swiper";

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Reviews</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"  pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        >
                {/* <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={IMG1} alt="Steven Hulse" />
                        </div>
                        <h5 className='client__name'>Steven Hulse</h5>
                        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis amet, id dolore inventore eos laudantium neque facere, doloremque quia, non assumenda?</small>
                    
                </SwiperSlide> */}
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={IMG4} alt="Steven Hulse" />
                        </div>
                        <h5 className='client__name'>Freyman Casas</h5>
                        <small>Working with Nicholas on our restaurant website was an incredible experience. He truly understood our needs and vision, and took them to heart throughout the entire project. Nicholas carefully listened to our requirements, asked thoughtful questions, and effectively translated our ideas into a captivating website.. Nicholas' website looks exactly how we wanted and is already having a positive impact on our business. (translated from spanish to english)</small>
                    
                </SwiperSlide>
                <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={IMG2} alt="Tri Le" />
                        </div>
                        <h5 className='client__name'>Tri Le</h5>
                        <small>Nicky is a diligent person who shines in his ability to communicate and collaborate with others, while being very enjoyable to work with. From my experience with Nicky, he is someone who is willing to work hard to succeed, and does not give up when things don't go well. He is always willing to learn, and he is also willing to help others when they ask him for guidance. I am glad that I was able to work with Nicky, and I hope nothing but the best for him!</small>
                    
                </SwiperSlide>
                {/* <SwiperSlide className='testimonial'>
                    <div className="client__avatar">
                        <img src={IMG3} alt="Cassie Hutchings" />
                        </div>
                        <h5 className='client__name'>Cassie Hutchings</h5>
                        
                        <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis amet, id dolore inventore eos laudantium neque facere, doloremque quia, non assumenda?</small>
                    
                </SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default Testimonials;