import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 0) {
			setCategories((categories) => [inputValue, ...categories]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='form-group'>
			<label htmlFor='gifSearch' className='mb-2'>
				¿Qué deseas buscar?
				<span> </span>
				<span role='img' aria-label='thinking face emoji'>
					🤔
				</span>
			</label>
			<input
				id='gifSearch'
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				className='form-control'
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
