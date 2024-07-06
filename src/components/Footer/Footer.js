import logoIcon from '../../assets/media/svg/logo.svg';
import fbIcon from '../../assets/media/svg/facebook-f.svg';
import twiIcon from '../../assets/media/svg/twi.svg';
import instIcon from '../../assets/media/svg/inst.svg';

import './Footer.scss';

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

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container footer-container'>
				<img src={logoIcon} alt='logo' />
				<div className='footer-social'>
					{socialData.map(({ icon }, index) => (
						<a href='##' key={index}>
							<img className='img-icon' src={icon} alt='desc' />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
