import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonContact from './ButtonContact';
import Col from './Layout/Col';
import Container from './Layout/Container';
import { links } from './NavBar';
const Footer = () => {
	const adress = {
		street: 'INDUSTRIEWEG, 3 2880 BORNEM BELGIUM',

		contacts: [
			{
				icon: '/icons/phone.svg',
				type: 'phone',
				description: '+32 (0)3 890 91 11',
			},
			{
				icon: '/icons/fax.svg',
				type: 'fax',
				description: '+32 (0)3 890 91 18',
			},
			{
				icon: '/icons/mail.svg',
				type: 'email',
				description: 'jacques.beherman@beherman.com',
			},
		],
	};

	return (
		<footer>
			<Container>
				<Col colStart={[2]} colEnd={[8]} className="text-white">
					<h2 className="py-1 text-2xl">Want to know more?</h2>
					<h2 className="py-1 text-2xl">Want to meet us?</h2>
					<h2 className="py-1 text-2xl"> Be part of the adventure?</h2>
					<ButtonContact className="py-2" />
				</Col>
				<Col colStart={[10]} colEnd={14}>
					<ul className="flex flex-col">
						{links.map(({ name, href }, index) => (
							<Link key={name + index} href={href} className="my-2 font-bold text-white uppercase text-md font-jetbrains">
								{name}
							</Link>
						))}
					</ul>
				</Col>
				<Col colStart={[18]}>
					{adress.contacts.map(({ icon, description, type }) => (
						<p className="flex justify-start items-center">
							<Image src={icon} alt={`icon of ${type}`} width={16} height={16} />
							<span className="ml-4 text-white">{description}</span>
						</p>
					))}
				</Col>
			</Container>
			<Container>
				<Col>
					<img src="" alt="logo behermangroup small" />
				</Col>
			</Container>
		</footer>
	);
};

export default Footer;
