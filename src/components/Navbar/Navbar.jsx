import React, { useRef } from "react";
import colors from "../../config/colors";
import Button from "../Button/Button";
import { FaReact } from "react-icons/fa";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
	const navList = [
		{ name: "Home", href: "/" },
		{ name: "Skills", href: "/skills" },
		{ name: "Projects", href: "/projects" },
		{ name: "Contact", href: "/contact" },
	];
	const navBar = useRef();
	return (
		<div style={styles.container} className="container">
			<div style={styles.rightContainer} className="rightContainer">
				<div
					style={styles.logoBorder}
					id="logoBorder"
					className="logoBorder"
				>
					<FaReact style={styles.logo} className="logo" />
				</div>
			</div>
			<div className="hamBurgerContainer">
				<HamburgerMenu navBarRef={navBar} />
				<div
					style={styles.navContainer}
					id={"navbar"}
					ref={navBar}
					className="navContainer navTranslate"
				>
					{navList.map((e) => (
						<Button
							text={e.name}
							key={e.name}
							width="2vmin"
							className={"navBtn"}
						/>
					))}
					<Button
						text={"Hire Me!"}
						width="2vmax"
						className={"navBtn"}
						backgroundColor={colors.themeColor}
						borderColor={colors.white}
					/>
				</div>
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
		overflow: "visible",
		flex: 1,
	},
	logoBorder: {
		border: `2px solid ${colors.themeColor}`,
		borderRadius: "50%",
		left: "5px",
		top: "5px",
		position: "absolute",
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
