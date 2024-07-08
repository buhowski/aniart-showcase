import React, { useState, useEffect } from 'react';
import logoIcon from '../../assets/media/svg/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import './Header.scss';

const socialData = [
	{
		icon: faFacebookF,
	},
	{
		icon: faTwitter,
	},
	{
		icon: faInstagram,
	},
];

// Social component
const SocialMediaLinks = ({ socialData }) => (
	<div className='header-social'>
		{socialData.map(({ icon }, index) => (
			<a href='#social' key={index}>
				<FontAwesomeIcon icon={icon} />
			</a>
		))}
	</div>
);

// Header component
const Header = () => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={`header ${isActive ? 'active' : ''}`}>
			<div className='container'>
				<div className='header-container'>
					<SocialMediaLinks socialData={socialData} />

					<nav className='header-nav header-nav--left'>
						<a href='#shop'>
							<span>Shop</span>
						</a>
						<a href='#plan'>
							<span>Plan My Kitchen</span>
						</a>
					</nav>

					<a href='/' className='logo'>
						<img src={logoIcon} alt='Company Logo' />
					</a>

					<nav className='header-nav header-nav--right'>
						<a href='#about'>
							<span>About Us</span>
						</a>
						<a href='#gallery'>
							<span>Gallery</span>
						</a>
					</nav>

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
