import Image from 'next/image';
import React from 'react';

import { CardPropType } from '../utils/types';
import Col from './Layout/Col';
import Container from './Layout/Container';

const CardComponent = ({ prop, imageRight = false, className }: { prop: CardPropType; imageRight?: boolean; className?: string }) => {
	return (
		<Container className={`my-20 ${className}`}>
			{!!imageRight ? (
				<>
					<Col className="order-2 my-6 md:order-1" colStart={[2, null, 4, null, 4]}>
						<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{prop.title}</h1>
					</Col>
					<Col className="order-3 md:order-2" colStart={[2, 5]} colEnd={[26, null, 14, null, 14]}>
						<div>
							<h2 className="mb-10 text-2xl text-blue-300">{prop.subtitle}</h2>
						</div>
						<p className="text-base text-justify text-gray-300">{typeof prop?.text === 'string' && prop?.text}</p>
					</Col>
					<Col className="order-1 md:order-3" colStart={[1, null, 18, null, 18]} colEnd={[26]}>
						<Image src={prop.image} alt="image" width={554} height={376} />
					</Col>
				</>
			) : (
				<>
					<Col className="order-2 my-6 md:order-1 sm:order-2" colStart={[2, null, 16, null, 14]}>
						<h1 className="text-4xl font-bold text-white uppercase font-jetbrains">{prop.title}</h1>
					</Col>

					<Col colStart={[1, 2]} colEnd={[26, null, 12, null, 12]} className="object-cover order-1 md:order-2 md:min-h-94">
						<Image src={prop.image} alt="image" className="md:min-h-94" width={554} height={376} />
					</Col>
					<Col className="order-3 md:order-3" colStart={[2, null, 18, null, 18]}>
						<div>
							<h2 className="mb-10 text-2xl text-blue-300">{prop.subtitle}</h2>
						</div>
						<p className="text-base text-justify text-gray-300">{typeof prop?.text === 'string' && prop.text}</p>
					</Col>
				</>
			)}
		</Container>
	);
};

export default CardComponent;
