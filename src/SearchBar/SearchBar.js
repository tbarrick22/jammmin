import React, { useState } from "react";
import styles from "./SearchBar.module.css";
/* <div className={styles.divStyle}></div> */

function SearchBar() {
	const [search, setSearch] = useState("");

	function handleSearchInput(e) {
		setSearch(e.target.value);
	}

	return (
		<div className={styles.SearchBar}>
			<input
				id="search"
				type="text"
				placeholder="Enter a song, album, or artist"
				value={search}
				name="search"
				onChange={handleSearchInput}
			></input>
			<h4>{search}</h4>
			<button className={styles.SearchButton}>SEARCH</button>
		</div>
	);
}

export default SearchBar;
