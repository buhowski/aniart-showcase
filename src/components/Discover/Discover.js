import discImg from '../../assets/media/disc.png';

import './Discover.scss';

const Discover = () => {
	return (
		<section className='discover'>
			<div className='discover__img'>
				<img src={discImg} alt='disc' />
			</div>

			<div className='discover-info'>
				<p className='discover-info__sub'>
					Quality Craftmanship from build to delivery
				</p>
				<h2 className='discover-info__title'>
					Discover the beauty of a handmade kitchen
				</h2>
				<p className='discover-info__text'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere atque
					quisquam quidem ratione dolor saepe esse repudiandae alias, quibusdam iusto.
				</p>

				<button className='main-btn'>about us</button>
			</div>
		</section>
	);
};

export default Discover;
