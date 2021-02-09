import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
	const title = 'Imagen';
	const url = 'http://localhost:3000/img.jpeg';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('Debe mostrar el componente correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de tener un parrafo con el title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('Debe de tener la imagen igual al url y alt de los props', () => {
		const img = wrapper.find('img');
		const { src, alt } = img.props();

		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('Debe tener la animación animate__fadeIn', () => {
		const div = wrapper.find('div').first();
		const { className } = div.props();

		expect(className.includes('animate__fadeIn')).toBe(true);
	});
});
