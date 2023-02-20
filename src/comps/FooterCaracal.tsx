import Image from 'next/image';
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
		<Container className="flex bg-color-black">
			<Col colStart={[2]} colEnd={[14, 4]}>
				<Image src={companyLogo} alt="the company logo" className="h-36" width={132} height={15} />
			</Col>

			<Col colStart={[2, 10]} colEnd={[22]} className="flex flex-row justify-around items-center">
				<div>
					{footerLinks.map(({ name, href }) => (
						<span key={`${name}-${href}`} className="p-1 border-r border-color-link-gray">
							<Link href={href} className="mx-2 text-sm text-color-link-gray">
								{name}
							</Link>
						</span>
					))}
				</div>
			</Col>
			<Col colStart={[2, 22]} colEnd={[24]} className="items-center">
				<Image src="/icons/caracal-logo2.svg" alt="the company logo" className="" width={45} height={19} />
			</Col>
		</Container>
	);
};

export default FooterCaracal;
