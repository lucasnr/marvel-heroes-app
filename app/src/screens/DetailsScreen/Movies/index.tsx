import React, { useMemo } from 'react';

import { Container, Movie } from './styles';

import findImage from '~/utils/findImage';

interface Props {
	movies: string[];
}

const Movies: React.FC<Props> = ({ movies }) => {
	const images = useMemo(() => {
		return movies.map((movie) => findImage(movie));
	}, []);

	return (
		<Container horizontal={true} showsHorizontalScrollIndicator={false}>
			{images.map((image, index) => (
				<Movie key={index} source={image} />
			))}
		</Container>
	);
};

export default Movies;
