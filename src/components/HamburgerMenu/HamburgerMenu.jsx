import React, { useRef, useState } from "react";
import "./HamburgerMenu.css";
import colors from "../../config/colors";

export default function HamburgerMenu({ navBarRef }) {
	const handleHamburgerPress = () => {
		console.log("clicked");
		navBarRef.current.classList.toggle("navTranslate");
	};
	return (
		<div
			class="ham"
			id="ham"
			style={styles.container}
			onClick={handleHamburgerPress}
		>
			<div className="lines" id="lines">
				<div className="one" id="one" style={styles.bars}></div>
				<div className="two" id="two" style={styles.bars}></div>
				<div className="three" id="three" style={styles.bars}></div>
			</div>
		</div>
	);
}

const styles = {
	container: {
		cursor: "pointer",
		border: `2px solid ${colors.themeColor}`,
		padding: "9px",
		borderRadius: "2vmin",
		transition: "all 0.25s ease",
		display: "none",
	},
	bars: {
		transition: "all 0.5s ease",
		height: "5px",
		width: "25px",
		backgroundColor: colors.themeColor,
		borderRadius: "1vmin",
		marginBottom: "2px",
	},
};
