import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<div className='container mt-5'>
			<h2 className='h1 mb-3'>gifR</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid key={uuidv4()} category={category} />
				))}
			</ol>
		</div>
	);
};

export default GifExpertApp;
