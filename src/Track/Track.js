import React from "react";
import styles from "./Track.module.css";
import generateId from "../utilities";
/* <div className={styles.divStyle}></div> */

function Track(props) {
	// render action for if it is in results (add to playlist) or in playlist (remove)

	const handleRemoveClick = () => {
		// console.log(props);
		props.removeTrack(props.id);
	};

	const handleAddClick = () => {
		// console.log(props);
		props.addTrackToPlaylist({
			id: props.id,
			name: props.name,
			artist: props.artist,
			album: props.album,
			isRemoval: true,
		});
	};

	function renderAction() {
		// console.log(props);
		if (props.isRemoval) {
			return (
				<button
					className={styles.TrackAction}
					onClick={handleRemoveClick}
				>
					-
				</button>
			);
		} else {
			return (
				<button className={styles.TrackAction} onClick={handleAddClick}>
					+
				</button>
			);
		}
	}
	// console.log(props.addSongToPlaylist);
	return (
		<div className={styles.Track}>
			<div className={styles.TrackInformation}>
				<h3>{props.name}</h3>

				<p>
					{props.artist} | {props.album}
				</p>
			</div>
			{renderAction()}
		</div>
	);
}

export default Track;
