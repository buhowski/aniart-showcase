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
			<div className='container '>
				<div className='header-container'>
					<div className='header-social'>
						{socialData.map(({ icon }, index) => (
							<a href='##' key={index}>
								<img className='img-icon' src={icon} alt='desc' />
							</a>
						))}
					</div>

					<div className='header-nav header-nav--left'>
						<a href='#shop'>Shop</a>
						<a href='#plan'>Plan My Kitchen</a>
					</div>

					<a href='/' className='logo'>
						<img src={logoIcon} alt='desc' />
					</a>

					<div className='header-nav header-nav--right'>
						<a href='#about'>About Us</a>
						<a href='#gallery'>Gallery</a>
					</div>

					<button type='button' className='btn-transparent'>
						my order
						<FontAwesomeIcon icon={faCartShopping} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
