import React from 'react';
import { CardPropType } from '../utils/types';
import Col from './Layout/Col';
import Container from './Layout/Container';

const CardComponent = ({ prop, imageRight = false, className }: { prop: CardPropType; imageRight?: boolean; className?: string }) => {
	return (
		<Container className={`my-10 ${className}`}>
			<Col className="my-6" colStart={[25, null, 16, null, 14]}>
				<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{prop.title}</h1>
			</Col>

			{!!imageRight ? (
				<>
					<Col className="" colStart={[2]} colEnd={[26, null, 14, null, 14]}>
						<img src={prop.image} alt="image of building headquarter" />
					</Col>
					<Col className="" colStart={[16, null, 18, null, 18]}>
						<div>
							<h2 className="text-blue-300">{prop.subtitle}</h2>
						</div>
						<p className="text-justify text-gray-300">{prop.text}</p>
					</Col>
				</>
			) : (
				<>
					<Col className="" colStart={[2]} colEnd={[26, null, 14, null, 14]}>
						<div>
							<h2 className="text-blue-300">{prop.subtitle}</h2>
						</div>
						<p className="text-justify text-gray-300">{prop.text}</p>
					</Col>
					<Col className="" colStart={[16, null, 18, null, 18]}>
						<img src={prop.image} alt="image of building headquarter" />
					</Col>
				</>
			)}
		</Container>
	);
};

export default CardComponent;
