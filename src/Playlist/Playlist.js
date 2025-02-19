import React from "react";
import styles from "./Playlist.module.css";
/* <div className={styles.divStyle}></div> */

function Playlist() {
	return (
		<div className={styles.Playlist}>
			<input defaultValue={"New Playlist"} />
			{/* <!-- Add a TrackList component --> */}
			<button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
		</div>
	);
}

export default Playlist;
