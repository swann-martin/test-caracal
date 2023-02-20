import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ButtonContact = ({ className, text = 'Contact Us' }: { className?: string; text?: string }) => {
	return (
		<Link href="/contact" className="flex justify-between items-center">
			<p className={`flex px-3 py-2 rounded-3xl border-2 border-color-accent ${className}`}>
				<span className="mx-2 uppercase">{text}</span>
				<Image src="/icons/arrow.svg" alt="icon of an arrow" />
			</p>
		</Link>
	);
};

export default ButtonContact;
