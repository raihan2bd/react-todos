import React from 'react';

import classes from './about.module.css';

const About = () => (
  <div className={`${classes['about-container']}`}>
    <div className={`${classes['about-card']}`}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam
        ab architecto a. Laboriosam eius veniam quisquam magni nulla atque
        delectus earum vitae repudiandae fugit, culpa, rem veritatis
        reprehenderit est?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Unde praesentium qui commodi veniam id quibusdam quia eaque eius
        maxime iste, dolorem aspernatur. Quis distinctio eveniet ipsa minima
        dicta suscipit! Accusamus?
      </p>
    </div>
  </div>
);

export default About;
