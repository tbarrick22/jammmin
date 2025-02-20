import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../TrackList/Tracklist";
import generateId from "../utilities";
/* <div className={styles.divStyle}></div> */

function Playlist(props) {
	// State variables for playlist name and playlist tracks
	const [playlist, setPlaylist] = useState(props.addedSongs);
	const [name, setName] = useState("New Playlist");

	// function addSongToPlaylist(song) {
	// 	// ADD LOGIC TO CHECK IF TRACK ALREADY EXISTS IN LIST
	// 	setPlaylist((playlist) => {
	// 		return [song, ...playlist];
	// 	});
	// }

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	// console.log("addSongToPlaylist in Playlist:", addSongToPlaylist);
	// console.log("props in Playlist:", props.addedSongs);
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
				trackList={playlist}
				// addSongToPlaylist={addSongToPlaylist}
			/>
			<button className={styles.PlaylistSave}>
				SAVE TO SPOTIFY (DOES NOT WORK)
			</button>
		</div>
	);
}

export default Playlist;
