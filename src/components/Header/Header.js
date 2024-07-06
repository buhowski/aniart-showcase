import logoIcon from '../../assets/media/svg/logo.svg';
import fbIcon from '../../assets/media/svg/facebook-f.svg';
import twiIcon from '../../assets/media/svg/twi.svg';
import instIcon from '../../assets/media/svg/inst.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const socialData = [
	{
		icon: fbIcon,
	},
	{
		icon: twiIcon,
	},
	{
		icon: instIcon,
	},
];

const Header = () => {
	return (
		<header className='header'>
			<div className='container header-container'>
				<div className='header-social'>
					{socialData.map(({ icon }, index) => (
						<a href='##' key={index}>
							<img className='img-icon' src={icon} alt='desc' />
						</a>
					))}
				</div>

				<div className='header-nav'>
					<a href='##'>Shop</a>
					<a href='##'>Plan My Kitchen</a>
				</div>

				<a href='/' className='logo'>
					<img src={logoIcon} alt='desc' />
				</a>

				<div className='header-nav'>
					<a href='##'>About Us</a>
					<a href='##'>Gallery</a>
				</div>

				<button type='button' className='main-btn'>
					my order
					<FontAwesomeIcon icon={faCartShopping} />
				</button>
			</div>
		</header>
	);
};

export default Header;
