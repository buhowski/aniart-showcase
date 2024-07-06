import img1 from '../../assets/media/Bitmap-1.png';
import img2 from '../../assets/media/Bitmap-2.png';
import img3 from '../../assets/media/Bitmap-3.png';
import img4 from '../../assets/media/Bitmap.png';

import './Gallery.scss';

const Gallery = () => {
	const galleryData = [
		{
			img: img1,
		},
		{
			img: img2,
		},
		{
			img: img3,
		},
		{
			img: img4,
		},
	];

	return (
		<section className='gallery'>
			<div className=''>
				<div className=''>
					{galleryData.map(({ img }, index) => (
						<img src={img} alt='de' />
					))}
				</div>
			</div>

			<div className=''>
				<button type='button' className='main-btn'>
					view more
				</button>
			</div>
		</section>
	);
};

export default Gallery;
