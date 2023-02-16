import Link from 'next/link';
import React from 'react';
import { LinksType } from '../utils/types';
import Col from './Layout/Col';
import Container from './Layout/Container';

const footerLinksDefault = [
	{
		name: 'Cookie settings',
		href: '/',
	},
	{
		name: 'Terms & Conditions',
		href: '/',
	},
	{
		name: 'Privacy policy',
		href: '/',
	},
	{
		name: '@ 2022 Beherman Group, All rights reserved',
		href: '/',
	},
];

const FooterCaracal = ({ companyLogo, footerLinks = footerLinksDefault }: { companyLogo: string; footerLinks?: LinksType[] }) => {
	return (
		<Container className="flex">
			<Col colStart={[2]} colEnd={[4]}>
				<img src={companyLogo} alt="the company logo" className="" />
			</Col>

			<Col colStart={[10]} colEnd={[22]} className="flex flex-row justify-around">
				{footerLinks.map(({ name, href }) => (
					<span className="p-1 border-r border-color-link-gray">
						<Link href={href} className="text-sm text-color-link-gray">
							{name}
						</Link>
					</span>
				))}
			</Col>
			<Col colStart={[22]} colEnd={[24]}>
				<img src="/icons/caracal-logo2.svg" alt="the company logo" className="" />
			</Col>
		</Container>
	);
};

export default FooterCaracal;
