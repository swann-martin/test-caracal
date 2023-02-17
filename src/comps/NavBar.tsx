import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Col from './Layout/Col';
import Container from './Layout/Container';
import motion from 'framer-motion';

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

				{isOpenMenu && (
					<Col colStart={[2]} colEnd={[24]} className="absolute right-0 top-14 w-full backdrop-blur-sm md:hidden">
						<div className="flex flex-col items-justify">
							{links.map(({ name, href }, index) => (
								<div key={`${name}${index}`} className="flex justify-center my-2">
									<p
										onClick={() => {
											router.push(`${href}`);
											setIsOpenMenu(false);
										}}
										className={`mr-4 text-3xl font-bold text-white cursor-pointer hover:border-spacing-y-28 ${'hover:text-blue-300 hover:border-y-2'}`}
									>
										{name}
									</p>
								</div>
							))}
						</div>
					</Col>
				)}
				<Col colStart={[24, null, null]} colEnd={[24]}>
					<button
						onClick={() => {
							setIsOpenMenu(!isOpenMenu);
						}}
						className="block p-2 bg-blue-300 rounded-full md:hidden"
					>
						{isOpenMenu ? (
							<span className="block w-6 h-6 font-bold text-white cursor-pointer md:hidden">X</span>
						) : (
							<svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" className="block w-6 h-6 cursor-pointer md:hidden" fill="none" viewBox="0 0 24 24" stroke="white">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</Col>
			</Container>
		</nav>
	);
};

export default NavBar;
