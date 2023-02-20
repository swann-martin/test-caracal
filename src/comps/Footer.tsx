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
			<Container className="items-center bg-color-black">
				<Col colStart={[2]} colEnd={[24, 8]} className="py-2 text-white">
					<h2 className="py-1 text-2xl">Want to know more?</h2>
					<h2 className="py-1 text-2xl">Want to meet us?</h2>
					<h2 className="py-1 text-2xl"> Be part of the adventure?</h2>
					<ButtonContact className="py-2 my-3" />
				</Col>
				<Col colStart={[2, 10]} colEnd={[24, 14]}>
					<ul className="hidden flex-col md:flex">
						{links.map(({ name, href }, index) => (
							<Link key={name + index} href={href} className="my-2 text-sm font-bold text-white uppercase font-jetbrains">
								{name}
							</Link>
						))}
					</ul>
				</Col>
				<Col colStart={[2, 14, 15, 18]} className="sm:my-2">
					<h2 className="my-2 w-1/2 text-white">{adress.street}</h2>
					{adress.contacts.map(({ icon, description, type }) => (
						<p key={description} className="flex justify-start items-center">
							<Image src={icon} alt={`icon of ${type}`} width={16} height={16} />
							<Link href={type === 'email' ? `mailto:${description}` : `tel:${description}`} className="ml-4 text-white">
								{description}
							</Link>
						</p>
					))}
				</Col>
			</Container>
		</footer>
	);
};

export default Footer;
