import React, { useState } from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";
import generateId from "../utilities";
/* <div className={styles.divStyle}></div> */

function Tracklist(props) {
	const [tracks, setTracks] = useState(props.trackList);

	// function to remove song from tracklist
	const removeSong = (songIdToRemove) => {
		setTracks((tracks) => {
			return tracks.filter((track) => {
				return track.id !== songIdToRemove;
			});
		});
	};

	// console.log("addSongToPlaylist in Tracklist:", addSongToPlaylist);

	return (
		<div className={styles.TrackList}>
			{/* <!-- You will add a map method that renders a set of Track components  --> */}
			{tracks.map((track) => (
				<Track
					key={track.id}
					id={track.id}
					name={track.name}
					artist={track.artist}
					album={track.album}
					isRemoval={track.isRemoval}
					removeSong={removeSong}
					addSongToPlaylist={props.addSongToPlaylist}
				/>
			))}
		</div>
	);
}

export default Tracklist;
