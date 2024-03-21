import React, { useRef } from "react";
import "./HamburgerMenu.css";
import colors from "../../config/colors";

export default function HamburgerMenu({ navBarRef }) {
	const hamMenu = useRef();
	return (
		<div class="ham" id="ham" style={styles.container} ref={hamMenu}>
			<div class="lines" id="lines">
				<div class="one" id="one" style={styles.bars}></div>
				<div class="two" id="two" style={styles.bars}></div>
				<div class="three" id="three" style={styles.bars}></div>
			</div>
		</div>
	);
}

const styles = {
	container: {
		cursor: "pointer",
		border: `2px solid ${colors.themeColor}`,
		padding: "9px",
		borderRadius: "15px",
		transition: "all 0.25s ease",
		display: "none",
	},
	bars: {
		transition: "all 0.5s ease",
		height: "5px",
		width: "25px",
		backgroundColor: colors.themeColor,
		borderRadius: "10px",
		marginBottom: "2px",
	},
};
