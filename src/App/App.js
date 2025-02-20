// import logo from "./logo.svg";
import React from "react";
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
			name: "Test Track1",
			artist: "Test Artist1",
			album: "Test Album1",
			isRemoval: true,
		},
		{
			id: generateId(),
			name: "Test Track2",
			artist: "Test Artist2",
			album: "Test Album2",
			isRemoval: true,
		},
		{
			id: generateId(),
			name: "Test Track3",
			artist: "Test Artist3",
			album: "Test Album3",
			isRemoval: true,
		},
	];
	return (
		<div>
			<h1>
				Ja<span className={styles.highlight}>mmm</span>ing
			</h1>
			<div className={styles.App}>
				<SearchBar />

				<div className={styles.AppPlaylist}>
					<SearchResults resultSongs={testResultList} />
					<Playlist addedSongs={testPlayList} />
				</div>
			</div>
		</div>
	);
}

export default App;
