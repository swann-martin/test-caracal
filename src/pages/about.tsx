import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import NavBar from '../comps/NavBar';
import CardComponent from '../comps/CardComponent';
import { CardPropType } from '../utils/types';
import BannerComponent from '../comps/BannerComponent';

const About: NextPage = () => {
	const heroTitle = 'Nearly a century driven by a passion for excellence';

	const vision: CardPropType = {
		title: 'Our Vision',
		image: '/images/vision.jpg',
		subtitle: 'Our corporate vision for the future is based on the secure foundation of experience and tradition.',
		text: 'Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.',
	};

	const comitment: CardPropType = {
		title: 'Commitment',
		image: '/images/comitment.jpg',
		subtitle: 'In a world committed to the ecological transition, we want to make our contribution by building the mobility solutions of tomorrow.',
		text: 'The brands we are working with today, Fuso and Piaggio, are paving the way for new ways of conceiving transportation, on roads all over the world, at city entrances and even within urban traffic.',
	};
	const board = {
		title: 'The Board',
		image: '/images/board.jpg',
		subtitle: 'Left to right',
		text: [
			{ name: 'Paul Borghgraef', position: 'Director' },
			{ name: 'Christian Beherman', position: 'President' },
			{ name: 'Jacques P. Beherman', position: 'Managing director' },
			{ name: 'Olivier Beherman', position: 'Director' },
			{ name: 'Etienne Rosseeuw', position: 'Director' },
		],
	};

	return (
		<div className="py-2 min-h-screen main-background-color">
			<Head>
				<title>Caracal Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container className="flex items-center md:h-96">
				<Col className="p-2" colStart={[2, 4]} colEnd={[24, null, 18, null, 18]}>
					<h1 className="text-6xl font-bold text-white uppercase font-jetbrains text-start">{heroTitle}</h1>
				</Col>
			</Container>
			<CardComponent prop={vision} />
			<BannerComponent message="Are you looking for a reference partner to develop your mobility activities?" />
			<CardComponent prop={comitment} imageRight />
			<Container>
				<Col className="my-6" colStart={[2, null, 2, null, 2]}>
					<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{board.title}</h1>
				</Col>
				<Col className="" colStart={[1, 2]} colEnd={[26, null, 17, null, 17]}>
					<img src={board.image} alt="image of building headquarter" />
				</Col>

				<Col className="flex my-2 text-justify md:my-0 md:justify-center md:border-l md:border-l-color-line" colStart={[2, null, 18, null, 18]}>
					<h2 className="text-sm font-bold text-white uppercase font-karla">{board.subtitle}</h2>

					{board?.text.map((item, i) => (
						<div key={`${item}-${i}`} className="my-1">
							<h3 className="text-base text-white">{item?.name}</h3>
							<h4 className="text-sm text-color-accent2">{item?.position}</h4>
						</div>
					))}
				</Col>
			</Container>
			//footer
		</div>
	);
};

export default About;
