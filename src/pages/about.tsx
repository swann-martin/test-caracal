import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import NavBar from '../comps/NavBar';
import CardComponent from '../comps/CardComponent';

const About: NextPage = () => {
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
			<CardComponent prop={vision} />
			<CardComponent prop={comitment} imageRight />
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

export default About;
