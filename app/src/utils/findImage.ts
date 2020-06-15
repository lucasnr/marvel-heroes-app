const images = [
	{
		name: 'black-panther.png',
		image: require('~/assets/chars/black-panther.jpg'),
	},
	{ name: 'deadpool.png', image: require('~/assets/chars/deadpool.jpg') },
	{ name: 'dr-doom.png', image: require('~/assets/chars/dr-doom.jpg') },
	{
		name: 'green-goblin.png',
		image: require('~/assets/chars/green-goblin.jpg'),
	},
	{ name: 'happy-hogan.png', image: require('~/assets/chars/happy-hogan.jpg') },
	{
		name: 'howard-stark.png',
		image: require('~/assets/chars/howard-stark.jpg'),
	},
	{ name: 'iron-man.png', image: require('~/assets/chars/iron-man.jpg') },
	{ name: 'mary-jane.png', image: require('~/assets/chars/mary-jane.jpg') },
	{ name: 'punisher.png', image: require('~/assets/chars/punisher.jpg') },
	{ name: 'red-skull.png', image: require('~/assets/chars/red-skull.jpg') },
	{ name: 'ronan.png', image: require('~/assets/chars/ronan.jpg') },
	{ name: 'spider-man.png', image: require('~/assets/chars/spider-man.jpg') },
	{ name: 'talos.png', image: require('~/assets/chars/talos.jpg') },
	{ name: 'thanos.png', image: require('~/assets/chars/thanos.jpg') },
	{ name: 'venom.png', image: require('~/assets/chars/venom.jpg') },
];

export default function (imagePath: string) {
	const find = images.find((item) => imagePath.endsWith(item.name));
	return find?.image;
}
