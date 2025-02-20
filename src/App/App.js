// import logo from "./logo.svg";
import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Tracklist from "../TrackList/Tracklist";
import Track from "../Track/Track";
import generateId from "../utilities";

function App() {
	// TEST CODE DELETE LATER
	const testResultList = [
		{
			id: generateId(),
			name: "Test Track1",
			artist: "Test Artist1",
			album: "Test Album1",
			isRemoval: false,
		},
		{
			id: generateId(),
			name: "Test Track2",
			artist: "Test Artist2",
			album: "Test Album2",
			isRemoval: false,
		},
		{
			id: generateId(),
			name: "Test Track3",
			artist: "Test Artist3",
			album: "Test Album3",
			isRemoval: false,
		},
	];
	const testPlayList = [
		{
			id: generateId(),
			name: "Playlist Track1",
			artist: "Test Artist1",
			album: "Test Album1",
			isRemoval: true,
		},
		{
			id: generateId(),
			name: "Playlist Track2",
			artist: "Test Artist2",
			album: "Test Album2",
			isRemoval: true,
		},
		{
			id: generateId(),
			name: "Playlist Track3",
			artist: "Test Artist3",
			album: "Album3",
			isRemoval: true,
		},
	];

	// Manage playlist tracks here
	const [playlistTracks, setPlaylistTracks] = useState(testPlayList);

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
			alert("Playlist sent to Spotify!\n(not really)");
		}
	};
	return (
		<div>
			<h1>
				Ja<span className={styles.highlight}>mmm</span>ing
			</h1>
			<div className={styles.App}>
				<SearchBar />

				<div className={styles.AppPlaylist}>
					<SearchResults
						resultSongs={testResultList}
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
