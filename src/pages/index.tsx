import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';

const Page: NextPage = () => {
	return (
		<div className="py-2 min-h-screen main-background-color">
			<Head>
				<title>Caracal Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container className="min-h-80">
				<Col className="p-2 my-3">
					<Link href="/about" className="text-6xl font-bold text-center text-white uppercase font-jetbrains">
						Go to About Page
					</Link>
				</Col>
			</Container>
		</div>
	);
};

export default Page;
