import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
	const category = 'Ozark';

	test('Debe mostrar el componente correctamente', () => {
		useFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar items cuando se cargan imágenes con useFetchGifs()', () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/images/gif.jpg',
				title: 'Gif',
			},
		];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('#loadingAlert').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
