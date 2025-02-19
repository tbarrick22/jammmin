import React from "react";
import styles from "./Track.module.css";
/* <div className={styles.divStyle}></div> */

function Track() {
	return (
		<div className={styles.Track}>
			<div className={styles.TrackInformation}>
				{/* <h3><!-- track name will go here --></h3> */}

				{/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
			</div>
			{/* <button class={styles.TrackAction}><!-- + or - will go here --></button> */}
		</div>
	);
}

export default Track;
