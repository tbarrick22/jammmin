import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";
/* <div className={styles.divStyle}></div> */

function Tracklist(props) {
	return (
		<div className={styles.TrackList}>
			{/* <!-- You will add a map method that renders a set of Track components  --> */}
			{/* {console.log(props.trackList)} */}
			{(props.trackList || []).map((track) => (
				<Track
					key={track.id}
					id={track.id}
					name={track.name}
					artist={track.artist}
					album={track.album}
					isRemoval={track.isRemoval}
					removeTrack={props.removeTrack}
					addTrackToPlaylist={props.addTrackToPlaylist}
				/>
			))}
		</div>
	);
}

export default Tracklist;
