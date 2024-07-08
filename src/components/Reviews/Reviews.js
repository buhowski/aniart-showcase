import Slider from 'react-slick';

import './Reviews.scss';

const Reviews = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section className='reviews'>
			{/* <Slider {...settings}> */}
			<div className='simple-slider-item review'>
				<p className='review__sub sub'>What Our Customers Say</p>

				<h3>Over 35 years experience designing handmade kitchens</h3>

				<p className='review__text'>
					Since my first contact I have received a very high level of customer service
					and advice with my kitchen plans. Ben responded very quickly to all of my
					emails and delivery of the kitchen was as planned.
				</p>

				<p className='review__name'>Jane, Dundee</p>

				<button type='button' className='main-btn'>
					Frequently Asked Questions
				</button>
			</div>
			{/* </Slider> */}
		</section>
	);
};

export default Reviews;
