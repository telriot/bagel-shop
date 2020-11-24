export const siteInfo = {
	name: "Juri's BAGELS",
	subtitle: "and scones and other sweet stuff",
};
export const navLinks = [
	{ title: "Products", link: "/products", name: "products" },
	{ title: "Contacts", link: "/contacts", name: "contacts" },
	{ title: "News", link: "/news", name: "news" },

	//{ title: "Portfolio", link: "/portfolio" },
];
export const languageMenu = { title: "日本語", link: "/", locale: "jp" };

export const contactLink = {
	title: "Contact",
	link: "/contacts",
	name: "contact",
};
export const staples = [
	{
		imageSrc: "/pics/bananaBread.jpg",
		title: "BANANA BREAD",
		body:
			"Some of the things I write here have no sense, but it is important to understand that it is not about the contents, it is just about the text. I would rather do this than using lorem ipsum everywhere.",
		btnText: "TO THE BREADS",
	},
	{
		imageSrc: "/pics/bagelStaple.jpg",
		title: "CLASSIC BAGELS",
		body:
			"Some of the things I write here have no sense, but it is important to understand that it is not about the contents, it is just about the text. This bagels, for instance, really look good.",
		btnText: "TO THE BAGELS",
	},
	{
		imageSrc: "/pics/sconeStaple.jpg",
		title: "CORN SCONES",
		body:
			"Some of the things I write here have no sense, but it is important to understand that it is not about the contents, it is just about the text. Terrible scones by the way.",
		btnText: "TO THE SCONES",
	},
];
export type TVariant = {
	id: string;
	price: number;
	name: string;
	weight: number;
	img: string;
};
export type TProduct = {
	imageSrc: string;
	title: string;
	body: string;
	variants: Array<TVariant>;
};
export const variants = {
	"banana-bread-plain": {
		id: "banana-bread-plain",
		price: 1000,
		name: "Plain Banana Bread",
		weight: 750,
		img: "/pics/bananaBread.jpg",
	},
	"choco-walnut-banana-bread": {
		id: "choco-walnut-banana-bread",
		price: 1250,
		name: "Choco-walnut banana bread",
		weight: 750,
		img: "/pics/bananaBread.jpg",
	},
	"bagels-mixed-6": {
		id: "bagels-mixed-6",
		price: 1200,
		name: "Six pack",
		weight: 750,
		img: "/pics/bagelStaple.jpg",
	},
	"bagels-mixed-9": {
		id: "bagels-mixed-9",
		price: 1750,
		name: "Nine pack",
		weight: 1100,
		img: "/pics/bagelStaple.jpg",
	},
	"bagels-mixed-12": {
		id: "bagels-mixed-12",
		price: 2250,
		name: "Twelve pack",
		weight: 1400,
		img: "/pics/bagelStaple.jpg",
	},
	"corn-scones-6": {
		id: "corn-scones-6",
		price: 1000,
		name: "Six pack",
		weight: 450,
		img: "/pics/sconeStaple.jpg",
	},
	"corn-scones-9": {
		id: "corn-scones-9",
		price: 1450,
		name: "Nine pack",
		weight: 650,
		img: "/pics/sconeStaple.jpg",
	},
	"corn-scones-12": {
		id: "corn-scones-12",
		price: 1800,
		name: "Twelve pack",
		weight: 850,
		img: "/pics/sconeStaple.jpg",
	},
};
export const products: Array<TProduct> = [
	{
		imageSrc: "/pics/bananaBread.jpg",
		title: "BANANA BREAD",
		body:
			"Some of the things I write here have no sense, but it is important to understand that it is not about the contents, it is just about the text. I would rather do this than using lorem ipsum everywhere.",
		variants: [
			variants["banana-bread-plain"],
			variants["choco-walnut-banana-bread"],
		],
	},
	{
		imageSrc: "/pics/bagelStaple.jpg",
		title: "MIXED BAGELS",
		body:
			"Some of the things I write here have no sense, but it is important to understand that it is not about the contents, it is just about the text. This bagels, for instance, really look good.",
		variants: [
			variants["bagels-mixed-6"],
			variants["bagels-mixed-9"],
			variants["bagels-mixed-12"],
		],
	},
	{
		imageSrc: "/pics/sconeStaple.jpg",
		title: "CORN SCONES",
		body:
			"Some of the things I write here have no sense, but it is important to understand that it is not about the contents, it is just about the text. Terrible scones by the way.",
		variants: [
			variants["corn-scones-6"],
			variants["corn-scones-9"],
			variants["corn-scones-12"],
		],
	},
];
export const contactData = {
	email: "bagels@gmail.com",
	phone: "+8108054683078",
	addressLine1: "〒 880-0824,",
	addressLine2: "Oshimacho Tateno 1469-2",
	addressLine2JP: "大島著立野 1469-2",
	addressLine3: "Miyazaki, Japan",
	addressLine3JP: "宮崎市",
};
export const fadeDuration = 400;
