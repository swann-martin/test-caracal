import React from 'react';
import { CardPropType } from '../utils/types';
import Col from './Layout/Col';
import Container from './Layout/Container';

const CardComponent = ({ prop, imageRight = false, className }: { prop: CardPropType; imageRight?: boolean; className?: string }) => {
	return (
		<Container className={`my-20 ${className}`}>
			{!!imageRight ? (
				<>
					<Col className="my-6" colStart={[2, null, 4, null, 4]}>
						<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{prop.title}</h1>
					</Col>
					<Col className="" colStart={[2, 5]} colEnd={[26, null, 14, null, 14]}>
						<div>
							<h2 className="mb-10 text-2xl text-blue-300">{prop.subtitle}</h2>
						</div>
						<p className="text-base text-justify text-gray-300">{prop.text}</p>
					</Col>
					<Col className="" colStart={[1, null, 18, null, 18]} colEnd={[26]}>
						<img src={prop.image} alt="image" />
					</Col>
				</>
			) : (
				<>
					<Col className="my-6" colStart={[2, null, 16, null, 14]}>
						<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{prop.title}</h1>
					</Col>

					<Col colStart={[1, 2]} colEnd={[26, null, 12, null, 12]} className="object-cover md:min-h-94">
						<img src={prop.image} alt="image" className="md:min-h-94" />
					</Col>
					<Col className="" colStart={[2, null, 18, null, 18]}>
						<div>
							<h2 className="mb-10 text-2xl text-blue-300">{prop.subtitle}</h2>
						</div>
						<p className="text-base text-justify text-gray-300">{prop.text}</p>
					</Col>
				</>
			)}
		</Container>
	);
};

export default CardComponent;
