// import logo from "./logo.svg";
import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import generateId from "../utilities";
import getAndExtractSongs from "../query";

function App() {
	// Manage playlist tracks and search results here
	const [playlistTracks, setPlaylistTracks] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	// write function to set searchResults from query
	const handleSearch = async (inputString) => {
		const resultList = await getAndExtractSongs(inputString);
		// console.log(resultList);
		setSearchResults(resultList);
	};

	// Write function to add tracks to playlist
	function addTrackToPlaylist(song) {
		// ADD LOGIC TO CHECK IF TRACK ALREADY EXISTS IN LIST
		if (!playlistTracks.find((track) => track.id === song.id)) {
			setPlaylistTracks((playlistTracks) => {
				console.log("Song: ", song);
				console.log("Playlist Tracks: ", playlistTracks);
				return [song, ...playlistTracks];
			});
		}
	}

	// Function to remove songs from playlist
	const removeTrack = (songIdToRemove) => {
		setPlaylistTracks((playlistTracks) => {
			return playlistTracks.filter((track) => {
				return track.id !== songIdToRemove;
			});
		});
	};

	// Instead of saving playlist, just clear it when the user clicks save
	const clearPlaylist = () => {
		if (playlistTracks.length > 0) {
			setPlaylistTracks([]);
			alert("Playlist saved!\n(not really)");
		}
	};
	return (
		<div>
			<h1>
				Ja<span className={styles.highlight}>mmm</span>ing
			</h1>
			<div className={styles.App}>
				<SearchBar handleSearch={handleSearch} />

				<div className={styles.AppPlaylist}>
					<SearchResults
						resultSongs={searchResults}
						addTrackToPlaylist={addTrackToPlaylist}
					/>
					<Playlist
						playlistTracks={playlistTracks}
						removeTrack={removeTrack}
						clearPlaylist={clearPlaylist}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
