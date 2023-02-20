export type CardPropType = {
	title: string;
	image: string;
	subtitle: string;
	text: string | { name: string; position: string }[];
};

export type LinksType = {
	name: string;
	href: string;
};
