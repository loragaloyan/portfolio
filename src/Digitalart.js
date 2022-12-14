import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';
import './Digitalart.css';



import imgESO from './images/Digital Art/eso.png';
import imgCruelPrince  from './images/Digital Art/cruelprince.png';
import imgFeyre  from './images/Digital Art/feyre.png';
import imgCardan  from './images/Digital Art/cardan.png';
import imgAila  from './images/Digital Art/aila.png';
import imgGinger  from './images/Digital Art/portrait.png';
import imgNadia  from './images/Digital Art/nadia.png';
import imgAsra  from './images/Digital Art/asra.png';
import imgRhysand  from './images/Digital Art/rhysand.png';
import imgHermes from './images/Digital Art/hermes.png';
import imgDeimos  from './images/Digital Art/deimos.png';

import artESO from './images/Digital Art/Art/eso.jpg';
import artCruelPrince from './images/Digital Art/Art/cruelprince.jpg';
import artFeyre from './images/Digital Art/Art/feyre.jpg';
import artCardan from './images/Digital Art/Art/cardan.jpg';
import artAila from './images/Digital Art/Art/aila.jpg';
import artGinger from './images/Digital Art/Art/ginger.jpg';
import artNadia from './images/Digital Art/Art/nadia.jpg';
import artAsra from './images/Digital Art/Art/asra.jpg';
import artRhysand from './images/Digital Art/Art/rhysand.jpg';
import artHermes from './images/Digital Art/Art/hermes.jpg';
import artDeimos from './images/Digital Art/Art/deimos.jpg';



function Digitalart() {
  const contentItems = [
    { 'title': 'The Elder Scrolls Online', 'image': imgESO, 'link': artESO },
    { 'title': 'Portrait', 'image': imgGinger, 'link': artGinger },
    { 'title': 'The Cruel Prince', 'image': imgCruelPrince, 'link': artCruelPrince },
    { 'title': 'A Court of Mist and Fury', 'image': imgFeyre, 'link': artFeyre },
    { 'title': 'Prince Cardan', 'image': imgCardan, 'link': artCardan },
    { 'title': 'The Dance of Breaking Glass', 'image': imgAila, 'link': artAila },
    { 'title': 'Countess of Visuvia', 'image': imgNadia, 'link': artNadia },
    { 'title': 'The Wandering Magician', 'image': imgAsra, 'link': artAsra },
    { 'title': 'High Lord of the Night Court', 'image': imgRhysand, 'link': artRhysand },
    { 'title': 'The Messenger God', 'image': imgHermes, 'link': artHermes },
    { 'title': 'God of Terror', 'image': imgDeimos, 'link': artDeimos },
  ];

 
 const portfolioItems = contentItems.map((item) => {
    return <div className='shadow'>
      <a className='a-none' href={item.link}> 
        <div>
          <h3 className='h3-primary center-align bottom-tiny top-small'>{item.title}</h3>
        </div>   
        <div className="flex1 darker-box padding-large">
            <img src={item.image} width="100%"></img>
        </div>
      </a>
    </div>;
  });



  return (
    <div className='mobile'>
      <Navigation />
      <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
        <h1 className='h1-primary center-align top-large bottom-medium'>Digital Art</h1>
        <div className='dark-box top-dark padding-large'>
        <h3 className='h3-primary center-align opacity'>Procreate/Photoshop Projects</h3>
          { portfolioItems }
        </div>
      
    <div className='mobile'>
      <Footer />
    </div>
    </div>
  );
}

export { Digitalart }