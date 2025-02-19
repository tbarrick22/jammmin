import React, { useState } from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";
import generateId from "../utilities";
/* <div className={styles.divStyle}></div> */

function Tracklist(props) {
	// TEST CODE - TO DELETE - initialize empty list
	// const testTrackList = [
	// 	{
	// 		id: generateId(),
	// 		name: "Test Track1",
	// 		artist: "Test Artist1",
	// 		album: "Test Album1",
	// 	},
	// 	{
	// 		id: generateId(),
	// 		name: "Test Track2",
	// 		artist: "Test Artist2",
	// 		album: "Test Album2",
	// 	},
	// 	{
	// 		id: generateId(),
	// 		name: "Test Track3",
	// 		artist: "Test Artist3",
	// 		album: "Test Album3",
	// 	},
	// ];
	const [tracks, setTracks] = useState(props.trackList);

	return (
		<div className={styles.TrackList}>
			{/* <!-- You will add a map method that renders a set of Track components  --> */}
			{tracks.map((track) => (
				<Track
					key={track.id}
					name={track.name}
					artist={track.artist}
					album={track.album}
				/>
			))}
		</div>
	);
}

export default Tracklist;
