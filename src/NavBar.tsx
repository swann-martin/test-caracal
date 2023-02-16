import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Col from './comps/Layout/Col';
import Container from './comps/Layout/Container';

const links = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'History',
		href: '/history',
	},
	{
		name: 'Philantropy',
		href: '/philantropy',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
];

const NavBar = () => {
	return (
		<nav className="flex sticky top-0 left-0 flex-wrap justify-between items-center py-2 w-full z-2 sm:px-6 lg:px-8">
			<Container className="flex items-center">
				<Col colEnd={[16, 8]} className="min-h-32">
					<Link href={'/'}>
						<Image src="/icons/logo.svg" alt="beherman group logo" width={210} height={25} />
					</Link>
				</Col>
				<Col colStart={[14, 16, 16]} colEnd={[24]} className="hidden md:flex">
					<div className="flex justify-around mx-3">
						{links.map(({ name, href }, index) =>
							index === links.length - 1 ? (
								<div key={`${name}${index}`}>
									<Link href={href} className="px-3 py-2 bg-white rounded-3xl">
										{name}
									</Link>
								</div>
							) : (
								<div key={`${name}${index}`}>
									<Link href={href} className="mx-1 font-bold text-white hover:border-spacing-y-28 hover:border-blue-300 hover:border-b-2">
										{name}
									</Link>
								</div>
							)
						)}
					</div>
				</Col>
				<Col colStart={[24, null, null]} colEnd={[24]}>
					<button
						onClick={() => {
							console.log('clicked button');
						}}
						className="block p-2 bg-blue-300 rounded-full md:hidden"
					>
						<svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" className="block w-6 h-6 cursor-pointer md:hidden" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</Col>
			</Container>
		</nav>
	);
};

export default NavBar;
