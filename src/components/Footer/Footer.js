import React from 'react';
import logoIcon from '../../assets/media/svg/logo.svg';
import fbIcon from '../../assets/media/svg/facebook-f.svg';
import twiIcon from '../../assets/media/svg/twi.svg';
import instIcon from '../../assets/media/svg/inst.svg';
import footerBg from '../../assets/media/footer.png';

import './Footer.scss';

const FooterNavList = ({ items, title, socialItem }) => (
	<ul>
		<li className='ul-title'>{title}</li>

		{items.map((item, index) => (
			<li key={index}>
				<a href={item.link}>
					{item.label}

					{socialItem && <img className='img-icon' src={item.icon} alt={item.label} />}
				</a>
			</li>
		))}
	</ul>
);

const Footer = () => {
	const navItemsAbout = [
		{ link: '#shop', label: 'Shop' },
		{ link: '#plan-my-kitchen', label: 'Plan My Kitchen' },
		{ link: '#about-us', label: 'About Us' },
		{ link: '#gallery', label: 'Gallery' },
	];

	const navItemsService = [
		{ link: '#shop', label: 'FAQ' },
		{ link: '#plan-my-kitchen', label: 'Contact' },
		{ link: '#about-us', label: 'How to Buy' },
		{ link: '#gallery', label: 'Downloads' },
	];

	const navItemsInfo = [
		{ link: '#shop', label: 'Delivery' },
		{ link: '#plan-my-kitchen', label: 'Terms' },
		{ link: '#about-us', label: 'Privacy' },
	];

	const navItemsSocial = [
		{ link: '#shop', icon: fbIcon },
		{ link: '#plan-my-kitchen', icon: twiIcon },
		{ link: '#about-us', icon: instIcon },
	];

	return (
		<footer className='footer'>
			<div className='footer-bg'>
				<img src={footerBg} alt='foot' />
			</div>

			<div className='container footer-container'>
				<div className='footer-logo'>
					<a href='/' className=''>
						<img src={logoIcon} alt='Logo' />
					</a>
				</div>

				<div className='footer-grid'>
					<FooterNavList items={navItemsAbout} title='About' />

					<FooterNavList items={navItemsService} title='Service' />

					<FooterNavList items={navItemsInfo} title='Info' />

					<div className='footer-social'>
						<FooterNavList items={navItemsSocial} socialItem={true} title='Follow' />
					</div>
				</div>

				<div className='footer-copy'>
					<p className=''>
						Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive
						website design, Development & Hosting by mtc.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
