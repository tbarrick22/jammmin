import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../TrackList/Tracklist";
import generateId from "../utilities";
/* <div className={styles.divStyle}></div> */

function Playlist(props) {
	const [name, setName] = useState("New Playlist");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleButtonClick = () => {
		props.clearPlaylist();
	};

	return (
		<div className={styles.Playlist}>
			<input
				id="name"
				type="text"
				value={name}
				name="name"
				onChange={handleNameChange}
			/>
			{/* <!-- Add a TrackList component --> */}
			<Tracklist
				trackList={props.playlistTracks}
				removeTrack={props.removeTrack}
			/>
			<button className={styles.PlaylistSave} onClick={handleButtonClick}>
				SAVE TO SPOTIFY (DOES NOT WORK)
			</button>
		</div>
	);
}

export default Playlist;
