const getGifs = async (category) => {
	const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
	const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=12&api_key=${API_KEY}`;

	const response = await fetch(URL);
	const { data } = await response.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images?.original.url,
	}));

	return gifs;
};

export default getGifs;
