import React from "react";
import styles from "./Track.module.css";
/* <div className={styles.divStyle}></div> */

function Track(props) {
	// TEST CODE - TO DELETE
	// const testTrack = {
	// 	name: "Test Track",
	// 	artist: "Test Artist",
	// 	album: "Test Album",
	// };
	return (
		<div className={styles.Track}>
			<div className={styles.TrackInformation}>
				<h3>{props.name}</h3>

				<p>
					{props.artist} | {props.album}
				</p>
			</div>
			<button className={styles.TrackAction}> + or - will go here</button>
		</div>
	);
}

export default Track;
