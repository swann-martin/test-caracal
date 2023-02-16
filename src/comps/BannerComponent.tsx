import React from 'react';
import ButtonContact from './ButtonContact';
import Col from './Layout/Col';
import Container from './Layout/Container';

const BannerComponent = () => {
	return (
		<Container className="h-60">
			<Col colStart={[4]} colEnd={[26]}>
				<div className="flex justify-center text-white item-center bg-color-accent">
					<p className="flex items-center px-5 mx-3 w-1/2">
						<span className="px-2 text-3xl border-l-2 border-color-secondary h1/2">Are you looking for a reference partner to develop your mobility activities?</span>
					</p>
					<ButtonContact className="bg-color-black" />
				</div>
			</Col>
		</Container>
	);
};

export default BannerComponent;
