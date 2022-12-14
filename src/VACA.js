import React from "react";

import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import './common/styles/spacing.css';
import './common/styles/sitetypography.css';
import './VACA.css';

import imgHero from './images/UXUI/VACA/vacahero.png';
import imgDesktop from './images/UXUI/VACA/desktop.png';
import imgBeau from './images/UXUI/VACA/beautyshot.png';
import imgColor from './images/UXUI/VACA/colors.png';
import imgIcon from './images/UXUI/VACA/icons.png';
import imgLogo from './images/UXUI/VACA/logo.png';
import imgOnboard from './images/UXUI/VACA/onboarding.png';
import imgStyle from './images/UXUI/VACA/styletile.png';

import projVaca from './images/UXUI/VACA/VACA.pdf';

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


function VACA() {
const contentItems = [
	{'title': 'Logo Creation', 'text': 'Following a series of sketches, the intended logo for this project would convey sophistication and subtly hint at multiple forms of travel - flight and voyage.', 'image': imgLogo },
	{'title': 'Typography and Textures', 'text': 'A style tile demonstrates various color and texture explorations, finishign with type design choices.', 'image': imgStyle },
	{'title': 'Iconography & Data Visualization', 'text': 'The iconography and tools in this application were designed with the intention of reflecting the app’s atmosphere and luxurious intent.', 'image': imgIcon },
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

   function Items() {
    if (window.innerWidth < 1025) {
      return contentItems.map((item, index) => {
        return <div className='vaca-item'>
			<div className='flexbox margins-large'>
				<div className='flex1 box'>
					<h2 className='h2-primary left-align margins-small'>{item.title}</h2>
					<p className='p-primary margins-small'>{item.text}</p>
				</div>
				<div className='img flex1 box'>
					<img src={item.image} width="100%"></img>
				</div>
			</div>
		</div>
      });
    } else {
      return contentItems.map((item, index) => {
        if (index % 2) {
      return <div className='vaca-item'>
			<div className='flexbox margins-small'>
				<div className='flex1 box'>
					<h2 className='h2-primary left-align margins-small'>{item.title}</h2>
					<p className='p-primary margins-small'>{item.text}</p>
				</div>
				<div className='img flex1 box'>
					<img src={item.image} width="100%"></img>
				</div>
			</div>
		</div>
	} else {
			return <div className='vaca-item'>	
			<div className='flexbox margins-small'>	
				<div className='img flex1 box'>
					<img src= {item.image} width="100%"></img>
				</div>
				<div className='flex1 box'>
					<h2 className='h2-primary left-align margins-small'>{item.title}</h2>
					<p className='p-primary margins-small'>{item.text}</p>
				</div>
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
<div>
	<div className="vaca-hero">
		<img src={ imgHero } width="100%"></img>
	</div>

	<div className='flexbox top-small row'>
		<div className='flex1 margins-small'>
			<a className='a-none' href='/gaia'>
				<p className='p-primary'>Previous</p>
			</a>
		</div>
		<div className='flex1 right-align margins-small'>
			<a className='a-none' href='/sadhan'>
				<p className='p-primary'>Next</p>
			</a>
		</div>		
	</div>

	<div>
		<h1 className='h1-primary center-align top-medium'>VACA</h1>
		<h4 className='h4-primary opacity center-align'>Visual Design</h4>
		<div className='flex1 center-align margins-small bottom-small shadow'>
				<a href= {projVaca}>
					<button className='p-primary dark-case-study padding-ultra-s'>View Full Case-Study</button>
				</a>		
			</div>	
		<p className='p-primary left-align margins-large top-small bottom-small'>VACA allows the tracking and creation of a travel project, start to finish. Budgets, daily schedules, and weather forecasts are some of the features that would be on display for the user.</p>
	</div>
	<div className='dark-box top-dark'>
			<div className='flexbox margins-small top-medium'>
				<div className='flex1 box'>
						<h2 className='h2-primary margins-small'>Tracking</h2>
						<p className='p-primary margins-small'>Seasonal weather trends, regional site-seeing index, flight and hotel booking calendar</p>
						<h2 className='h2-primary margins-small'>Target Audience</h2>
						<p className='p-primary margins-small'>age 25-45
						married with children
						working class</p>
						<h2 className='h2-primary margins-small'>Word List</h2>
						<p className='p-primary margins-small'>travel, booking, flights, country, aprimary, nature, planning, trip, vacation, overseas, hotel, boarding, itinerary, schedule, check list</p>
				</div>
				<div className='flex1 box'>
					<img src= { imgColor } width="100%"></img>
				</div>
			</div>

			<div className='vaca-content'>
				<Items />
			</div>

			<div className='vaca-onboard top-medium'>
				<img className='vaca-onboard center-align' src= {imgOnboard} width="100%"></img>
			</div>

			<div className='vaca-desk center-align top-medium'>
				<img className='vaca-desktop' src= {imgDesktop} width="100%"></img>
			</div>

			<div className='vaca-beauty'>
				<img src= {imgBeau} width="100%"></img>
			</div>
		</div>	
</div>

<div className='flexbox top-small row'>
		<div className='flex1 margins-small'>
			<a className='a-none' href='/gaia'>
				<p className='p-primary'>Previous</p>
			</a>
		</div>
		<div className='flex1 right-align margins-small'>
			<a className='a-none' href='/sadhan'>
				<p className='p-primary'>Next</p>
			</a>
		</div>		
	</div>

<div className='mobile'>
 	<Footer />
</div>	
</div>
);
}

export { VACA }