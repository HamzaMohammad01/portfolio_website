import React from "react";
import colors from "../../config/colors";
import Card from "../Card/Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
	{
		name: "Salah Time",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Factor Calculator",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Sleepy Time",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Sleepy Time",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
];

export default function Projects() {
	return (
		<div style={styles.container}>
			<div style={styles.textContainer}>
				<div style={styles.text1}>Recent</div>
				<div style={styles.text2}>Projects</div>
			</div>
			<div style={styles.sliderContainer}>
				<FaChevronLeft size={"5vw"} color={colors.themeColor} />
				{projects.map((e) => (
					<Card text={e.name} description={e.description} />
				))}
				<FaChevronRight size={"5vw"} color={colors.themeColor} />
			</div>
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
		fontSize: "75px",
		marginRight: "10px",
		fontWeight: "100",
	},
	text2: {
		fontSize: "100px",
		color: colors.themeColor,
		fontWeight: "650",
	},
	sliderContainer: {
		display: "flex",
		marginTop: "30px",
		alignItems: "center",
		justifyContent: "space-around",
	},
};
