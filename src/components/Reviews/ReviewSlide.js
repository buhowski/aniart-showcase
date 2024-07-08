import React from 'react';

const ReviewSlide = ({ subText, heading, text, name }) => {
	return (
		<div className='simple-slider-item review'>
			<p className='review__sub sub'>{subText}</p>

			<h3>{heading}</h3>

			<p className='review__text'>{text}</p>

			<p className='review__name'>{name}</p>

			<button type='button' className='main-btn'>
				Frequently Asked Questions
			</button>
		</div>
	);
};

export default ReviewSlide;
