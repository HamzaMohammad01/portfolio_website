import React, { useRef } from "react";
import colors from "../../config/colors";
import Button from "../Button/Button";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { TbHexagonLetterH } from "react-icons/tb";

export default function Navbar({ refs }) {
	const navList = [
		{ name: "About", href: refs.aboutRef },
		{ name: "Skills", href: refs.skillsRef },
		{ name: "Projects", href: refs.projectsRef },
		{ name: "Contact", href: refs.contactRef },
	];

	const handleOnClick = (ref) => {
		if (typeof ref == "string") {
			console.log("Yes");
			return;
		}
		window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
	};

	const navBar = useRef();
	return (
		<div style={styles.container} className="container">
			<div style={styles.rightContainer} className="rightContainer">
				<TbHexagonLetterH
					style={styles.logo}
					className="logo"
					onClick={() => handleOnClick(refs.homeRef)}
				/>
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
							onClick={() => handleOnClick(e.href)}
						/>
					))}
					<a
						href="mailto:mohd2010hamza@gmail.com"
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<Button
							text={"Hire Me!"}
							width="2vmax"
							className={"navBtn"}
							backgroundColor={colors.themeColor}
							borderColor={colors.white}
						/>
					</a>
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
	// logoBorder: {
	// 	border: `2px solid ${colors.themeColor}`,
	// 	cursor: "pointer",
	// 	borderRadius: "50%",
	// 	left: "5px",
	// 	top: "5px",
	// 	position: "absolute",
	// 	height: "max-content",
	// 	width: "max-content",
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	padding: "10px",
	// },
	logo: {
		color: colors.themeColor,
		cursor: "pointer",
		height: "12vmin",
		width: "12vmin",
		paddingTop: "0.5vmax",
	},
	navContainer: {
		display: "flex",
		justifyContent: "flex-end",
		flex: 1,
	},
};
