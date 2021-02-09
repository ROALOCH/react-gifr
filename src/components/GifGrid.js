import React from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3 className='gif-title'>{category}</h3>
			{loading && (
				<div id='loadingAlert' className='alert alert-secondary' role='alert'>
					Cargando Imágenes
				</div>
			)}
			<div className='card-grid'>
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;
