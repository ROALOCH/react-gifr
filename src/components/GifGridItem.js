import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
	return (
		<div className='card card-custom animate__animated animate__fadeIn'>
			<img src={url} alt={title} className='card-img-top' />
			<div className='card-body'>
				<p className='card-text'>{title}</p>
			</div>
		</div>
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GifGridItem;
