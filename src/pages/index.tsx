import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import NavBar from '../comps/NavBar';

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

const Page: NextPage = () => {
	const heroTitle = 'Nearly a century driven by a passion for excellence';

	const vision = {
		title: 'Our Vision',
		image: '/images/vision.jpg',
		subtitle: 'Our corporate vision for the future is based on the secure foundation of experience and tradition.',
		text: 'Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.',
	};

	const comitment = {
		title: 'Commitment',
		image: '/images/comitment.jpg',
		subtitle: 'In a world committed to the ecological transition, we want to make our contribution by building the mobility solutions of tomorrow.',
		text: 'The brands we are working with today, Fuso and Piaggio, are paving the way for new ways of conceiving transportation, on roads all over the world, at city entrances and even within urban traffic.',
	};
	const board = {
		title: 'The Board',
		image: '/images/board.jpg',
		subtitle: 'ILeft to right',
		text: [{ name: '', position: '' }],
	};

	return (
		<div className="py-2 min-h-screen main-background-color">
			<Head>
				<title>Caracal Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container className="h-80">
				<Col className="p-2 my-3" colEnd={[25, null, 18, null, 18]}>
					<h1 className="text-6xl font-bold text-white uppercase font-jetbrains text-start">{heroTitle}</h1>
				</Col>
			</Container>
			// card component 1
			<Container className="">
				<Col className="my-6" colStart={[25, null, 16, null, 14]}>
					<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{vision.title}</h1>
				</Col>

				<Col className="" colStart={[1]} colEnd={[26, null, 14, null, 14]}>
					{/* <Image src={vision.image} width={376} height={554} alt="image of building headquarter" /> */}
					<img src={vision.image} alt="image of building headquarter" />
				</Col>
				<Col className="" colStart={[16, null, 18, null, 18]}>
					<div>
						<h2 className="text-blue-300">{vision.subtitle}</h2>
					</div>
					<p className="text-justify text-gray-300">{vision.text}</p>
				</Col>

				{/* <Col className="bg-blue-100" colStart={[2, null, 18, null, 14]} colEnd={[25, null, 24, null, 26]}>
					<p>Lorem ipsum</p>
				</Col> */}
			</Container>
			// card component 1 but inverted
			<Container>
				<Col className="my-6" colStart={[25, null, 16, null, 14]}>
					<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{comitment.title}</h1>
				</Col>

				<Col className="" colStart={[1]} colEnd={[26, null, 14, null, 14]}>
					{/* <Image src={comitment.image} width={376} height={554} alt="image of building headquarter" /> */}
					<img src={comitment.image} alt="image of building headquarter" />
				</Col>
				<Col className="" colStart={[16, null, 18, null, 18]}>
					<div>
						<h2 className="text-blue-300">{comitment.subtitle}</h2>
					</div>
					<p className="text-justify text-gray-300">{comitment.text}</p>
				</Col>

				{/* <Col className="bg-blue-100" colStart={[2, null, 18, null, 14]} colEnd={[25, null, 24, null, 26]}>
					<p>Lorem ipsum</p>
				</Col> */}
			</Container>
			// card component 2 board
			<Container>
				<Col className="my-6" colStart={[25, null, 16, null, 14]}>
					<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{board.title}</h1>
				</Col>
				<Col className="" colStart={[1]} colEnd={[26, null, 18, null, 18]}>
					<img src={board.image} alt="image of building headquarter" />
				</Col>
			</Container>
			//footer
		</div>
	);
};

export default Page;
