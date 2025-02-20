import React, { useState } from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../TrackList/Tracklist";
/* <div className={styles.divStyle}></div> */

function SearchResults(props) {
	const [results, setResults] = useState(props.resultSongs);
	return (
		<div className={styles.SearchResults}>
			<Tracklist trackList={results} />
		</div>
	);
}

export default SearchResults;
