import { motion } from 'framer-motion';
import React from 'react';

import ButtonContact from './ButtonContact';
import Col from './Layout/Col';
import Container from './Layout/Container';

const BannerComponent = ({ message }: { message: string }) => {
	return (
		<Container className="h-60">
			<Col colStart={[1, 4]} colEnd={[26]}>
				<motion.div
					className="flex flex-col justify-center text-white md:flex-row item-center bg-color-accent"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.3 }}
					variants={{
						visible: { opacity: 1, x: 0 },
						hidden: { opacity: 0, x: 100 },
					}}
				>
					<p className="flex justify-center items-center px-5 mx-3 my-2 md:w-1/2">
						<span className="px-2 text-3xl border-l-2 border-color-secondary h1/2">{message}</span>
					</p>
					<ButtonContact className="bg-color-black" />
				</motion.div>
			</Col>
		</Container>
	);
};

export default BannerComponent;
