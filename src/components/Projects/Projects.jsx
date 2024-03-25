import React from "react";
import colors from "../../config/colors";
import "./Projects.css";
import Card from "../Card/Card";

const projects = [
	{
		name: "Salah Time Api",
		description:
			"Created using MongoDb, NodeJS and Express, this is the backend for Salah Time app and its is build to create a network to get know time of every mosque and never get late.",
		uri: "https://github.com/HamzaMohammad01/namazTimeApi",
	},
	{
		name: "My Portfolio Website",
		description:
			"This is my portfolio website created using React and here you will get to know me.",
		uri: "https://github.com/HamzaMohammad01/portfolio_website",
	},
	{
		name: "Factor Calculator App",
		description:
			"Created using React Native, this app gives of factors of any number",
		uri: "https://github.com/HamzaMohammad01/factorCalculator/tree/v1.0.0",
	},
	{
		name: "Sleep Time Calculator",
		description:
			"Created using React Native, this app gives you time when to sleep and when to wake using based on sleep science.",
		uri: "https://github.com/HamzaMohammad01/sleepTimeCalculator/tree/v2.0.0",
	},
	{
		name: "ImageRecog",
		description:
			"Created using JavaScript, this using Tesseract module of Google and it extracts text from images",
		uri: "https://github.com/HamzaMohammad01/imageRecog",
	},
];

export default function Projects({ myRef }) {
	return (
		<div style={styles.container} ref={myRef}>
			<div style={styles.textContainer} className="textContainer">
				<div style={styles.text1}>Recent</div>
				<div style={styles.text2}>Projects</div>
			</div>
			<swiper-container
				style={styles.swiper}
				navigation={true}
				pagination={true}
				pagination-clickable="true"
			>
				{projects.map((e) => (
					<swiper-slide>
						<Card
							text={e.name}
							description={e.description}
							margin={"auto"}
							button={e.uri}
							width="50%"
						/>
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
}

const styles = {
	container: {
		marginTop: "100px",
		display: "flex",
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
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
	swiper: {
		margin: "1vmax 0vmax 1vmax",
		height: "100%",
		width: "100%",
		"--swiper-pagination-bullet-inactive-color": colors.white,
	},
};
