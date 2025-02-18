import React, { useState } from "react";
import styles from "./SearchBar.module.css";
/* <div className={styles.divStyle}></div> */

function SearchBar() {
	const [search, setSearch] = useState("");

	function handleSearchInput(e) {
		setSearch(e.target.value);
	}

	return (
		<div>
			<input
				id="search"
				type="text"
				placeholder="Search.."
				value={search}
				name="search"
				onChange={handleSearchInput}
			></input>
			<h4>{search}</h4>
		</div>
	);
}

export default SearchBar;
