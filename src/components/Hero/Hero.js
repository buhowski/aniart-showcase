import heroImg from '../../assets/media/hero.png';
import Slider from 'react-slick';

import './Hero.scss';

const Hero = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section className='hero'>
			<div className='simple-slider-item'>
				<img className='hero__img' src={heroImg} alt='description' />

				<div className='hero-info'>
					<p className='sub'>Design and order your new kitchen online today</p>
					<h1>Bespoke & made to measure handmade kitchen design</h1>
					<button type='button' className='main-btn'>
						Order Now
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
