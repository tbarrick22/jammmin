// import logo from "./logo.svg";
import React from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Tracklist from "../TrackList/Tracklist";
import Track from "../Track/Track";

function App() {
	return (
		<div>
			<h1>
				Ja<span className={styles.highlight}>mmm</span>ing
			</h1>
			<div className={styles.App}>
				<SearchBar />

				<div className={styles.AppPlaylist}>
					{/* <!-- Add a SearchResults component --> */}
					{/* <!-- Add a Playlist component --> */}
				</div>
			</div>
		</div>
	);
}

export default App;
