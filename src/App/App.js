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
	const testTrackList = [
		{
			id: generateId(),
			name: "Test Track1",
			artist: "Test Artist1",
			album: "Test Album1",
		},
		{
			id: generateId(),
			name: "Test Track2",
			artist: "Test Artist2",
			album: "Test Album2",
		},
		{
			id: generateId(),
			name: "Test Track3",
			artist: "Test Artist3",
			album: "Test Album3",
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
					<Tracklist trackList={testTrackList} />
					{/* <!-- Add a SearchResults component --> */}
					{/* <!-- Add a Playlist component --> */}
				</div>
			</div>
		</div>
	);
}

export default App;
