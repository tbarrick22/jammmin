import React, { useState } from "react";
import styles from "./SearchBar.module.css";
/* <div className={styles.divStyle}></div> */

function SearchBar(props) {
	const [search, setSearch] = useState("");

	function handleSearchInput(e) {
		setSearch(e.target.value);
	}

	// function to handle search feature
	const handleSearchClick = () => {
		// check the user put something in
		if (search.length > 0) {
			props.handleSearch(search);
		} else {
			return;
		}
	};

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
			<button className={styles.SearchButton} onClick={handleSearchClick}>
				SEARCH
			</button>
		</div>
	);
}

export default SearchBar;
