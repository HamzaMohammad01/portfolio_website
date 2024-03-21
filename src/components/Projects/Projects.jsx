import React from "react";
import colors from "../../config/colors";
import Card from "../Card/Card";
import "./Projects.css";
import Carousal from "../Carousal/Carousal";

const projects = [
	{
		name: "Salah Time",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	// {
	// 	name: "Factor Calculator",
	// 	description:
	// 		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
	// 	uri: "",
	// },
	// {
	// 	name: "Sleepy Time",
	// 	description:
	// 		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
	// 	uri: "",
	// },
];

export default function Projects() {
	return (
		<div style={styles.container}>
			<div style={styles.textContainer} className="textContainer">
				<div style={styles.text1}>Recent</div>
				<div style={styles.text2}>Projects</div>
			</div>
			<Carousal array={projects} className={"carousal"} />
		</div>
	);
}

const styles = {
	container: {
		marginTop: "100px",
		display: "flex",
		flexDirection: "column",
	},
	textContainer: {
		display: "flex",
		alignItems: "baseline",
		margin: "auto",
	},
	text1: {
		fontSize: "4.5vmax",
		marginRight: "0.75vmax",
		fontWeight: "100",
	},
	text2: {
		fontSize: "5.5vmax",
		color: colors.themeColor,
		fontWeight: "650",
	},
};
