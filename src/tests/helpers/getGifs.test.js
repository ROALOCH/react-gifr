import getGifs from '../../helpers/getGifs';

describe('Pruebas en getGifs (Fetch)', () => {
	test('Debe de traer la data con 12 elementos', async () => {
		const gifs = await getGifs('Ozark');

		expect(gifs.length).toBe(12);
	});

	test('Debe de traer la data con 0 elementos', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});
