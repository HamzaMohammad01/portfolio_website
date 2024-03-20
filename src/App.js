import React from "react";
import colors from "./config/colors";
import Navbar from "./components/Navbar/Navbar";
import HeroFrame from "./components/HeroFrame/HeroFrame";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Divider from "./components/Divider/Divider";

export default function App() {
	return (
		<div style={styles.container}>
			<div style={styles.homePage}>
				<Navbar />
				<HeroFrame />
			</div>
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
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
		width: "97vw",
		display: "flex",
		flexDirection: "column",
	},
};
