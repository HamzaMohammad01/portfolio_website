import React, { useRef } from "react";
import "./HamburgerMenu.css";
import colors from "../../config/colors";

export default function HamburgerMenu({ navBarRef }) {
	const ham = useRef();
	const lines = useRef();
	const one = useRef();
	const two = useRef();
	const three = useRef();

	const handleHamburgerPress = () => {
		navBarRef.current.classList.toggle("navTranslate");
		ham.current.classList.toggle("hamX");
		lines.current.classList.toggle("linesX");
		one.current.classList.toggle("oneX");
		two.current.classList.toggle("twoX");
		three.current.classList.toggle("threeX");
	};

	return (
		<div
			className="ham"
			id="ham"
			style={styles.container}
			onClick={handleHamburgerPress}
			ref={ham}
		>
			<div className="lines" id="lines" ref={lines}>
				<div
					className="one"
					id="one"
					style={styles.bars}
					ref={one}
				></div>
				<div
					className="two"
					id="two"
					style={styles.bars}
					ref={two}
				></div>
				<div
					className="three"
					id="three"
					style={styles.bars}
					ref={three}
				></div>
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
		transition: "all 0.25s ease",
		height: "5px",
		width: "35px",
		backgroundColor: colors.themeColor,
		borderRadius: "1vmin",
		marginBottom: "2px",
	},
};
