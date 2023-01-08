const fetchAPI = async (url) => {
	let data = null;
	let error = null;
	let loading = null;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Fetch error: ${response.status}`);
		}
		data = await response.json();
	} catch (err) {
		error = err;
	} finally {
		loading = false;
	}

	return { data, error, loading };
};

export default fetchAPI;
