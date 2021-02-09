import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
import { wait } from '@testing-library/react';

describe('Pruebas en el hook useFetchGifs', () => {
	test('Debe de retornar el estado inicial', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('Ozark')
		);
		const { data, loading } = result.current;

		await waitForNextUpdate();

		expect(data).toStrictEqual([]);
		expect(loading).toBe(true);
	});

	test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('Ozark')
		);

		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toBe(12);
		expect(loading).toBe(false);
	});
});
