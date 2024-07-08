import React from 'react';
import Slider from 'react-slick';
import ReviewSlide from './ReviewSlide';

import btnPrev from '../../assets/media/svg/arrow-left.svg';
import btnNext from '../../assets/media/svg/arrow-right.svg';

import '../../styles/slick-slider.scss';
import './Reviews.scss';

const PrevArrow = (props) => {
	const { className, onClick } = props;
	return (
		<button type='button' className={className} onClick={onClick}>
			<img src={btnPrev} alt='btn' />
		</button>
	);
};

const NextArrow = (props) => {
	const { className, onClick } = props;
	return (
		<button type='button' className={className} onClick={onClick}>
			<img src={btnNext} alt='btn' />
		</button>
	);
};

const Reviews = () => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<section className='reviews' id='plan'>
			<div className='container reviews-container'>
				<Slider {...settings}>
					<ReviewSlide
						subText='What Our Customers Say'
						heading='Over 35 years experience designing handmade kitchens'
						text='Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.'
						name='Jane, Dundee'
					/>

					<ReviewSlide
						subText='Another Subtitle'
						heading='Another Heading'
						text='Another review text.'
						name='John Doe'
					/>
				</Slider>
			</div>
		</section>
	);
};

export default Reviews;
