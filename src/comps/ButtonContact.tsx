import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

const ButtonContact = ({ className, text = 'Contact Us' }: { className?: string; text?: string }) => {
	return (
		<Link href="/contact" className={`flex justify-between items-center ${className}`}>
			<p className="flex px-3 py-2 rounded-3xl border-2 border-color-accent">
				<span className="mx-2 uppercase">{text}</span>
				<img src="/icons/arrow.svg" alt="icon of an arrow" />
			</p>
		</Link>
	);
};

export default ButtonContact;
