const images = [
	{
		name: 'chars/black-panther.png',
		image: require('~/assets/chars/black-panther.jpg'),
	},
	{ name: 'chars/deadpool.png', image: require('~/assets/chars/deadpool.jpg') },
	{ name: 'chars/dr-doom.png', image: require('~/assets/chars/dr-doom.jpg') },
	{
		name: 'chars/green-goblin.png',
		image: require('~/assets/chars/green-goblin.jpg'),
	},
	{
		name: 'chars/happy-hogan.png',
		image: require('~/assets/chars/happy-hogan.jpg'),
	},
	{
		name: 'chars/howard-stark.png',
		image: require('~/assets/chars/howard-stark.jpg'),
	},
	{ name: 'chars/iron-man.png', image: require('~/assets/chars/iron-man.jpg') },
	{
		name: 'chars/mary-jane.png',
		image: require('~/assets/chars/mary-jane.jpg'),
	},
	{ name: 'chars/punisher.png', image: require('~/assets/chars/punisher.jpg') },
	{
		name: 'chars/red-skull.png',
		image: require('~/assets/chars/red-skull.jpg'),
	},
	{ name: 'chars/ronan.png', image: require('~/assets/chars/ronan.jpg') },
	{
		name: 'chars/spider-man.png',
		image: require('~/assets/chars/spider-man.jpg'),
	},
	{ name: 'chars/talos.png', image: require('~/assets/chars/talos.jpg') },
	{ name: 'chars/thanos.png', image: require('~/assets/chars/thanos.jpg') },
	{ name: 'chars/venom.png', image: require('~/assets/chars/venom.jpg') },

	{ name: 'movies/ant-man.jpg', image: require('~/assets/movies/ant-man.jpg') },
	{
		name: 'movies/ant-man-and-the-wasp.jpg',
		image: require('~/assets/movies/ant-man-and-the-wasp.jpg'),
	},
	{
		name: 'movies/avengers-1.jpg',
		image: require('~/assets/movies/avengers-1.jpg'),
	},
	{
		name: 'movies/avengers-2.jpg',
		image: require('~/assets/movies/avengers-2.jpg'),
	},
	{
		name: 'movies/avengers-3.jpg',
		image: require('~/assets/movies/avengers-3.jpg'),
	},
	{
		name: 'movies/avengers-4.jpg',
		image: require('~/assets/movies/avengers-4.jpg'),
	},
	{
		name: 'movies/black-panther.jpg',
		image: require('~/assets/movies/black-panther.jpg'),
	},
	{
		name: 'movies/captain-america-1.jpg',
		image: require('~/assets/movies/captain-america-1.jpg'),
	},
	{
		name: 'movies/captain-america-2.jpg',
		image: require('~/assets/movies/captain-america-2.jpg'),
	},
	{
		name: 'movies/captain-america-3.jpg',
		image: require('~/assets/movies/captain-america-3.jpg'),
	},
	{
		name: 'movies/captain-marvel.jpg',
		image: require('~/assets/movies/captain-marvel.jpg'),
	},
	{
		name: 'movies/deadpool-1.jpg',
		image: require('~/assets/movies/deadpool-1.jpg'),
	},
	{
		name: 'movies/deadpool-2.jpg',
		image: require('~/assets/movies/deadpool-2.jpg'),
	},
	{
		name: 'movies/doctor-strange.jpg',
		image: require('~/assets/movies/doctor-strange.jpg'),
	},
	{
		name: 'movies/fantastic-four-1.jpg',
		image: require('~/assets/movies/fantastic-four-1.jpg'),
	},
	{
		name: 'movies/fantastic-four-2.jpg',
		image: require('~/assets/movies/fantastic-four-2.jpg'),
	},
	{
		name: 'movies/guardians-of-the-galaxy-1.jpg',
		image: require('~/assets/movies/guardians-of-the-galaxy-1.jpg'),
	},
	{
		name: 'movies/guardians-of-the-galaxy-2.jpg',
		image: require('~/assets/movies/guardians-of-the-galaxy-2.jpg'),
	},
	{ name: 'movies/hulk.jpg', image: require('~/assets/movies/hulk.jpg') },
	{
		name: 'movies/iron-man-1.jpg',
		image: require('~/assets/movies/iron-man-1.jpg'),
	},
	{
		name: 'movies/iron-man-2.jpg',
		image: require('~/assets/movies/iron-man-2.jpg'),
	},
	{
		name: 'movies/iron-man-3.jpg',
		image: require('~/assets/movies/iron-man-3.jpg'),
	},
	{
		name: 'movies/punisher.jpg',
		image: require('~/assets/movies/punisher.jpg'),
	},
	{
		name: 'movies/spider-man-1.jpg',
		image: require('~/assets/movies/spider-man-1.jpg'),
	},
	{
		name: 'movies/spider-man-2.jpg',
		image: require('~/assets/movies/spider-man-2.jpg'),
	},
	{
		name: 'movies/spider-man-3.jpg',
		image: require('~/assets/movies/spider-man-3.jpg'),
	},
	{
		name: 'movies/spider-man-far-from-home.jpg',
		image: require('~/assets/movies/spider-man-far-from-home.jpg'),
	},
	{
		name: 'movies/spider-man-homecoming.jpg',
		image: require('~/assets/movies/spider-man-homecoming.jpg'),
	},
	{ name: 'movies/thor-1.jpg', image: require('~/assets/movies/thor-1.jpg') },
	{ name: 'movies/thor-2.jpg', image: require('~/assets/movies/thor-2.jpg') },
	{ name: 'movies/thor-3.jpg', image: require('~/assets/movies/thor-3.jpg') },
	{ name: 'movies/venom.jpg', image: require('~/assets/movies/venom.jpg') },
];

export default function (imagePath: string) {
	const find = images.find((item) => imagePath.endsWith(item.name));
	return find?.image;
}
