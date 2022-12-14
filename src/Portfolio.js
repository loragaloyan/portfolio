import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './Portfolio.css';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';


import imgBubble from './images/bubble.png';
import imgGlobe from './images/globe.png';
import imgMobile from './images/bubmobile.png';
import imgVaca from './images/Portfolio/pp_vaca.png';
import imgCode from './images/Portfolio/pp_code.png';
import imgModel from './images/Portfolio/pp_modeling2.png';
import imgESO from './images/Portfolio/pp_eso2.png';
import imgArrows from './images/Portfolio/arrows.png';


function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function Portfolio() {
  const contentItems = [
    {'title': 'UX/UI & Design', 'text': 'UX/UI development, visual design & branding, and interactive design projects.', 'image': imgVaca, 'link': '/uxui' },
    {'title': 'Coding', 'text': 'Unity projects coded in C# as well as React, Flutter, HTML, and CSS.', 'image': imgCode, 'link': '/code' },
    {'title': '3D-Modeling', 'text': '3D art projects created in Blender.', 'image': imgModel, 'link': '/modeling' },
    {'title': 'Digital Art', 'text': 'Digital portraits (and others).', 'image': imgESO, 'link': '/digitalart'},
  ];

  const bubbleItems = [
    { 'image': imgMobile }
  ];

  const [items, setItems] = React.useState(contentItems)
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setItems(contentItems)
    }, 100)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

  function Top() {
    if (window.innerWidth < 1025 ) {
      return (
        <div className='center-align mobile bottom-medium'>
          <img className='bub-mobile' src= {imgMobile} width="100%"></img>
        </div>
      );
    }
    return (
      <div className='flex1 box portfolio-globe-bubble'>
        <div className='portfolio-globe'>
          <img className='img-globe padding-medium' src= {imgGlobe} width="100%"></img>
        </div>
        <div className='portfolio-bubble'>
          <img className='img-profile padding-medium' src= {imgBubble} width="100%"></img>
        </div>
      </div>
    );
  }

  function Items() {
    if (window.innerWidth < 1025) {
      return contentItems.map((item, index) => {
        return (
          <div key={index} className='shadow margins-small bottom-medium'>
            <div className='flexbox darker-box'>
              <a href={item.link} className='a-none flex1 box'>
                <img className="portfolio-img" src= {item.image} width="100%"></img>
              </a>
              <a href={item.link} className='a-none flex1 box'>
                <div className='margins-small'>  
                  <h3 className='h3-primary left-align'>{item.title}</h3>
                  <p className='p-primary left-align'>{item.text}</p>
                </div>
              </a>
            </div>
          </div>
        );
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
          return <div key={index} className='margins-small bottom-medium shadow'>
            <div className='flexbox darker-box'>
                <a href={item.link} className='a-none flex1 box'>
                  <div className='margins-small'>  
                    <h3 className='h3-primary center-align'>{item.title}</h3>
                    <p className='p-primary center-align'>{item.text}</p>
                  </div>
                </a>
                <a href={item.link} className='a-none flex1 box'>
                  <img className="portfolio-img" src= {item.image} width="100%"></img>
                </a>
            </div>
          </div>
        } else { 
          return <div key={index} className='margins-small bottom-medium shadow'>
            <div className='flexbox darker-box'>
                <a href={item.link} className='a-none flex1 box'>
                  <img className="portfolio-img" src= {item.image} width="100%"></img>
                </a>
                <a href={item.link} className='a-none flex1 box'>
                  <div className='margins-small'>  
                    <h3 className='h3-primary center-align'>{item.title}</h3>
                    <p className='p-primary center-align'>{item.text}</p>
                  </div>
                </a>
            </div>
          </div>
        }
      });
    }
  }

  return (
    <div className='mobile'>
    <Navigation />
      <link rel="stylesheet" href="https://use.typekit.net/sxc8zwt.css"></link>
      <div className='flexbox mobile'>
        <Top />
        <div className='flex1 box top-small'>
          <h1 className='h1-primary mobile-center mobile-margins-2'>Hi, I'm Lora!</h1>
          <div className='flexbox top-small'>
            <div className='flex2'><p className='p-primary mobile-center mobile-margins-2'>UX/UI Designer, Visual Designer, Developer</p></div>
            <div className='flex1'></div>
          </div>
          <div className='flexbox'>
            <div className='flex2'><p className='p-primary mobile-center mobile-margins-2'>Digital Artist,  3D Modeler, Gamer, Bookworm, Writer</p></div>
            <div className='flex1'></div>
            <div className='flex1'></div>
         </div>
        </div>   
      </div>     
      
      <div className='center-align'>
        <img className='img-arrows top-small bottom-small mobile' src= { imgArrows } ></img>
      </div>  
      
      <div className='dark-box top-dark mobile'>
        <h1 className='h1-primary top-medium bottom-medium box center-align'>What I Do</h1>
        <Items />
      </div>  

    <div className='mobile'>
      <Footer />
    </div>  

    </div>
  );

}

export { Portfolio }
