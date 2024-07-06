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
			<Slider {...settings}>
				<div className='simple-slider-item'>
					<p>What Our Customers Say</p>
					<h2>Over 35 years experience designing handmade kitchens</h2>
					<p>
						Since my first contact I have received a very high level of customer service
						and advice with my kitchen plans. Ben responded very quickly to all of my
						emails and delivery of the kitchen was as planned.
					</p>
					<p>Jane, Dundee</p>
					<button type='button'>Order Now</button>
				</div>
			</Slider>
		</section>
	);
};

export default Reviews;
