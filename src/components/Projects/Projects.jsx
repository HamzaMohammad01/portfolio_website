import React from "react";
import colors from "../../config/colors";
import "./Projects.css";
import Card from "../Card/Card";
import pWebsite from "../../images/pWebsite.png";
import sleepTimeCalculator from "../../images/SleepTimeCalculator.png";
import factorCalculator from "../../images/factorCalculator.png";
import { FaMosque } from "react-icons/fa6";
import { TbTextRecognition } from "react-icons/tb";

const projects = [
	{
		name: "Salah Time Api",
		description:
			"Created using MongoDb, NodeJS and Express, this is the backend for Salah Time app and it is build to create a network to get to know time of every mosque and never get late.",
		uri: "https://github.com/HamzaMohammad01/namazTimeApi",
		iconComponent: <FaMosque size={"8vmax"} color={colors.themeColor} />,
	},
	{
		name: "My Portfolio Website",
		description:
			"This is my portfolio website created using React and here you will get to know me.",
		uri: "https://github.com/HamzaMohammad01/portfolio_website",
		iconComponent: (
			<img
				style={{ height: "15vmax", width: "35vmax" }}
				src={pWebsite}
				alt="portfolio website"
			/>
		),
	},
	{
		name: "Factor Calculator App",
		description:
			"Created using React Native, this app gives of factors of any number",
		uri: "https://github.com/HamzaMohammad01/factorCalculator/tree/v1.0.0",
		iconComponent: (
			<img
				style={{ height: "18vmax", width: "8vmax" }}
				src={factorCalculator}
				alt="factor calculator app"
			/>
		),
	},
	{
		name: "Sleep Time Calculator",
		description:
			"Created using React Native, this app gives you time when to sleep and when to wake using based on sleep science.",
		uri: "https://github.com/HamzaMohammad01/sleepTimeCalculator/tree/v2.0.0",
		iconComponent: (
			<img
				style={{ height: "18vmax", width: "8vmax" }}
				src={sleepTimeCalculator}
				alt="sleep time calculator"
			/>
		),
	},
	{
		name: "ImageRecog",
		description:
			"Created using JavaScript, this uses Tesseract module of Google and it extracts text from images",
		uri: "https://github.com/HamzaMohammad01/imageRecog",
		iconComponent: (
			<TbTextRecognition size={"8vmax"} color={colors.themeColor} />
		),
	},
];

export default function Projects({ myRef }) {
	return (
		<main style={styles.container} ref={myRef}>
			<div style={styles.textContainer} className="textContainer">
				<div style={styles.text1}>Recent</div>
				<div style={styles.text2}>Projects</div>
			</div>
			<swiper-container
				style={styles.swiper}
				navigation={true}
				pagination={true}
				slides-per-view={1}
				pagination-clickable="true"
				space-between={30}
			>
				{projects.map((e) => (
					<swiper-slide key={e.uri} lazy={true}>
						<Card
							text={e.name}
							description={e.description}
							margin={"auto"}
							button={e.uri}
							ariaLabel={`${e.name} github source code`}
							className={"card"}
							width="70%"
							iconComponent={e.iconComponent}
						/>
					</swiper-slide>
				))}
			</swiper-container>
		</main>
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
