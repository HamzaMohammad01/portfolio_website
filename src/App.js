import React, { useRef } from "react";
import colors from "./config/colors";
import Navbar from "./components/Navbar/Navbar";
import HeroFrame from "./components/HeroFrame/HeroFrame";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { LiaArrowUpSolid } from "react-icons/lia";

export default function App() {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const refs = {
		homeRef: useRef(),
		skillsRef: useRef(),
		projectsRef: useRef(),
		contactRef: useRef(),
		aboutRef: useRef(),
	};
	return (
		<div style={styles.container} ref={refs.homeRef}>
			<div style={styles.homePage}>
				<Navbar refs={refs} />
				<HeroFrame refs={refs} />
			</div>
			<About myRef={refs.aboutRef} />
			<Skills myRef={refs.skillsRef} />
			<Projects myRef={refs.projectsRef} />
			<Contact myRef={refs.contactRef} />
			<Footer />
			<div style={styles.iconContainer} onClick={handleClick}>
				<LiaArrowUpSolid style={styles.icon} size={"2vmax"} />
			</div>
		</div>
	);
}

const styles = {
	container: {
		color: colors.white,
		backgroundColor: colors.black,
		padding: "10px",
	},
	homePage: {
		height: "100vh",
		width: "95vw",
		display: "flex",
		flexDirection: "column",
	},
	iconContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "5vmax",
		width: "5vmax",
		borderRadius: "50%",
		backgroundColor: colors.themeColor,
		position: "fixed",
		bottom: "20px",
		right: "20px",
	},
};
