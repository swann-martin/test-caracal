import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Col from './Layout/Col';
import Container from './Layout/Container';
export const links = [
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
	const router = useRouter();

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: '-100%' },
	};
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	return (
		<nav className="flex sticky top-0 left-0 flex-wrap justify-between items-center py-4 w-full z-2 sm:px-6 lg:px-8 bg-main-background">
			<Container className="flex items-center">
				<Col colEnd={[16, 8]} className="min-h-32">
					<Link href={'/'}>
						<Image src="/icons/logo.svg" alt="beherman group logo" width={210} height={25} />
					</Link>
				</Col>
				<Col colStart={[14, 16, 16]} colEnd={[24]} className="hidden md:flex">
					<div className="flex items-center">
						{links.map(({ name, href }, index) =>
							index === links.length - 1 ? (
								<div key={`${name}${index}`}>
									<Link href={href} className="px-3 py-2 bg-white rounded-3xl">
										{name}
									</Link>
								</div>
							) : (
								<div key={`${name}${index}`}>
									<Link
										href={href}
										className={`mr-4 font-bold text-white hover:border-spacing-y-28  ${
											router.pathname === href ? 'border-blue-300 border-b-2 border-spacing-24' : 'hover:border-blue-300 hover:border-b-2'
										}`}
									>
										{name}
									</Link>
								</div>
							)
						)}
					</div>
				</Col>

				{
					<Col colStart={[2]} colEnd={[24]} className="absolute right-0 top-14 w-full md:hidden">
						<motion.div className="flex flex-col backdrop-blur-sm items-justify" animate={isOpenMenu ? 'open' : 'closed'} variants={variants}>
							{links.map(({ name, href }, index) => (
								<div key={`${name}${index}`} className="flex justify-center my-2">
									<p
										onClick={() => {
											router.push(`${href}`);
											setIsOpenMenu(false);
										}}
										className={`mr-4 text-3xl font-bold text-white cursor-pointer hover:border-spacing-y-28 border-y-2 ${'hover:text-blue-300 hover:border-y-2'}`}
									>
										{name}
									</p>
								</div>
							))}
						</motion.div>
					</Col>
				}
				<Col colStart={[24, null, null]} colEnd={[24]}>
					<button
						onClick={() => {
							setIsOpenMenu(!isOpenMenu);
						}}
						className="block p-2 bg-blue-300 rounded-full md:hidden"
					>
						{isOpenMenu ? (
							<span className="block w-6 h-6 font-bold text-white cursor-pointer md:hidden">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
									<line x1="15" y1="15" x2="25" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
									<line x1="25" y1="15" x2="15" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
									<circle className="circle" cx="20" cy="20" r="19" opacity="0" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></circle>
									<path
										d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z"
										className="progress"
										stroke="#fff"
										stroke-width="2.5"
										stroke-linecap="round"
										stroke-miterlimit="10"
										fill="none"
									></path>
								</svg>
							</span>
						) : (
							<svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" className="block w-6 h-6 cursor-pointer md:hidden" fill="none" viewBox="0 0 24 24" stroke="white">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</Col>
			</Container>
		</nav>
	);
};

export default NavBar;
