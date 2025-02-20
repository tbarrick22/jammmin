// Function to query the iTunes API

// async function to get data
const getSongs = async (inputString) => {
	const baseURL =
		"https://itunes.apple.com/search?entity=song&limit=20&term=";
	const searchParam = encodeURIComponent(inputString);
	const endpoint = baseURL + searchParam;

	try {
		const response = await fetch(endpoint);
		if (response.ok) {
			const jsonResponse = await response.json();
			// console.log(jsonResponse);
			return jsonResponse;
		}
		console.log("Request failed here");
		return [];
	} catch (error) {
		console.log(error);
		return [];
	}
};

// console.log(responseData);
// function to parse data into JS object in correct form for components
const extractSongs = (jsonData) => {
	if (!jsonData || !jsonData.results) {
		return [];
	}
	return jsonData.results.map((song) => ({
		id: song.trackId,
		name: song.trackName,
		artist: song.artistName,
		album: song.collectionName,
		isRemoval: false,
	}));
};

// Combine functions in one
const getAndExtractSongs = async (searchInput) => {
	const iTunesResponse = await getSongs(searchInput);
	const songList = extractSongs(iTunesResponse);
	// console.log(songList);
	return songList;
};

// getAndExtractSongs(testString);

export default getAndExtractSongs;
