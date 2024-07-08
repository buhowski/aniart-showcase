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
		// autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<section className='hero'>
			<Slider {...settings}>
				<HeroSlide
					imgSrc={heroImg}
					subText='Design and order your new kitchen online today'
					mainHeading='Bespoke & made to measure handmade kitchen design'
				/>

				<HeroSlide
					imgSrc={heroImg}
					subText='02 Design and order your new kitchen online today'
					mainHeading='02 Bespoke & made to measure handmade kitchen design'
				/>

				<HeroSlide
					imgSrc={heroImg}
					subText='03 Design and order your new kitchen online today'
					mainHeading='03 Bespoke & made to measure handmade kitchen design'
				/>
			</Slider>
		</section>
	);
};

export default Hero;
