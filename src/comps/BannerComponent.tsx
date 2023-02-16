import React from 'react';
import ButtonContact from './ButtonContact';
import Col from './Layout/Col';
import Container from './Layout/Container';

const BannerComponent = () => {
	return (
		<Container className="h-60">
			<Col colStart={[1, 4]} colEnd={[26]}>
				<div className="flex flex-col justify-center text-white md:flex-row item-center bg-color-accent">
					<p className="flex justify-center items-center px-5 mx-3 my-2 md:w-1/2">
						<span className="px-2 text-3xl border-l-2 border-color-secondary h1/2">Are you looking for a reference partner to develop your mobility activities?</span>
					</p>
					<ButtonContact className="bg-color-black" />
				</div>
			</Col>
		</Container>
	);
};

export default BannerComponent;
