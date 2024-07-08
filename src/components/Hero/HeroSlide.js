import React from 'react';

const HeroSlide = ({ imgSrc, subText, mainHeading }) => {
	return (
		<div className='hero-slider simple-slider-item'>
			<img className='hero__img' src={imgSrc} alt='description' />

			<div className='hero-info'>
				<p className='sub'>{subText}</p>

				<h1>{mainHeading}</h1>

				<button type='button' className='main-btn'>
					Order Now
				</button>
			</div>
		</div>
	);
};

export default HeroSlide;
