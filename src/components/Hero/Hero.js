import React from 'react';
import Slider from 'react-slick';

import HeroSlide from './HeroSlide';
import heroImg from '../../assets/media/hero.png';

import '../../styles/slick-slider.scss';
import './Hero.scss';

const Hero = () => {
	const settings = {
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2280,
		pauseOnHover: false,
	};

	return (
		<section className='hero' id='shop'>
			<Slider {...settings}>
				<HeroSlide
					imgSrc={heroImg}
					subText='Design and order your new kitchen online today'
					mainHeading='Bespoke & made to measure handmade kitchen design'
				/>

				<HeroSlide
					imgSrc={heroImg}
					subText='Another Subtitle'
					mainHeading='Another Heading'
				/>

				<HeroSlide
					imgSrc={heroImg}
					subText='Another Subtitle'
					mainHeading='Another Heading'
				/>
			</Slider>
		</section>
	);
};

export default Hero;
