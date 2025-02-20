import React, { useState } from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../TrackList/Tracklist";
/* <div className={styles.divStyle}></div> */

function SearchResults(props) {
	return (
		<div className={styles.SearchResults}>
			<Tracklist
				trackList={props.resultSongs}
				addTrackToPlaylist={props.addTrackToPlaylist}
			/>
		</div>
	);
}

export default SearchResults;
