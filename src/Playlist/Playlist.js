import React, { useState } from "react";
import styles from "./Playlist.module.css";
/* <div className={styles.divStyle}></div> */

function Playlist() {
	// State variables for playlist name and playlist tracks
	const [songs, setSongs] = useState([]);
	const [name, setName] = useState("");

	return (
		<div className={styles.Playlist}>
			<input defaultValue={"New Playlist"} />
			{/* <!-- Add a TrackList component --> */}

			<button className={styles.PlaylistSave}>
				SAVE TO SPOTIFY (DOES NOT WORK)
			</button>
		</div>
	);
}

export default Playlist;
