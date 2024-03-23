import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroFrame from "../HeroFrame/HeroFrame";

export default function HomePage() {
	return (
		<div style={styles.homePage}>
			<Navbar />
			<HeroFrame />
		</div>
	);
}

const styles = {
	homePage: {
		height: "100vh",
		width: "95vw",
		display: "flex",
		flexDirection: "column",
	},
};
