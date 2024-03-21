import React, { useRef } from "react";
import colors from "../../config/colors";
import Button from "../Button/Button";
import { FaReact } from "react-icons/fa";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Navbar() {
	const navBar = useRef();
	return (
		<div style={styles.container}>
			<div style={styles.rightContainer}>
				<div style={styles.logoBorder} id="logoBorder">
					<FaReact style={styles.logo} />
				</div>
			</div>
			<HamburgerMenu />
			<div style={styles.navContainer} id={"navbar"} ref={navBar}>
				<Button text={"Home"} />
				<Button text={"Skills"} />
				<Button text={"Projects"} />
				<Button text={"Contact"} />
				<Button
					text={"Hire Me!"}
					backgroundColor={colors.themeColor}
					borderColor={colors.white}
				/>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		alignItems: "center",
		fontWeight: "800",
		maxheight: "20vh",
		position: "absolute",
		width: "97%",
		justifyContent: "space-between",
	},
	rightContainer: {
		flex: 1,
	},
	logoBorder: {
		border: `2px solid ${colors.themeColor}`,
		borderRadius: "50%",
		height: "max-content",
		width: "max-content",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "10px",
	},
	logo: {
		color: colors.themeColor,
		height: "5vmax",
		width: "5vmax",
	},
	navContainer: {
		display: "flex",
		justifyContent: "flex-end",
		flex: 1,
	},
};
