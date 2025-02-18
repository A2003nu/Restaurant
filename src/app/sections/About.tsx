import React from 'react'
import aboutImage from '../../../public/assets/images/about.jpg';
import './about.css'
import Image from 'next/image';

export const About = () => {
  return (
    <section className="about" id='about'>
        <div className="conatiner" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100" >
                    <div className="about-img">
                        <Image src={aboutImage} alt="about" />
                    </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>About <span>Us</span></h3>
                    <p className="fst-italic"> We believe in creating unforgettable dining experiences by blending delicious flavors with a warm and welcoming atmosphere. Our commitment to quality and passion for hospitality make us the perfect place to celebrate life's moments.</p>
                <ul>
               <li>  <i className="bi bi-check2-circle"></i>  We use only the finest, locally sourced ingredients in every dish.</li>
                    <li> <i className="bi bi-check2-circle"></i>  Enjoy a variety of cuisines and flavors crafted to delight every palate.</li>
                    <li> <i className="bi bi-check2-circle"></i>  Our friendly staff is dedicated to making your visit special.</li>
                    <li>  <i className="bi bi-check2-circle"></i> Experience a comfortable setting that’s perfect for dining with family and friends.</li>
                    <li> <i className="bi bi-check2-circle"></i>  Your satisfaction is our top priority, and we constantly strive to exceed expectations.</li>
                </ul>
                
                
                </div>
            </div>
        </div>
    </section>
  )
}
