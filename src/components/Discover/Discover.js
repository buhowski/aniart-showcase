import discImg from '../../assets/media/disc.png';

import './Discover.scss';

const Discover = () => {
	return (
		<section className='discover'>
			<div className='discover__img'>
				<img src={discImg} alt='disc' />
			</div>

			<div className='discover-info'>
				<p className='discover-info__sub sub'>
					Quality Craftmanship from build to delivery
				</p>
				<h2 className='discover-info__title'>
					Discover the beauty of a handmade kitchen
				</h2>
				<p className='discover-info__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit
					amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus
					vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt,
					mauris purus ultrices.
				</p>

				<button className='main-btn'>about us</button>
			</div>
		</section>
	);
};

export default Discover;
