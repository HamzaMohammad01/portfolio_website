import React from "react";
import colors from "./config/colors";
import Navbar from "./components/Navbar/Navbar";
import HeroFrame from "./components/HeroFrame/HeroFrame";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
	return (
		<div style={styles.container}>
			<Navbar />
			<HeroFrame />
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
};
