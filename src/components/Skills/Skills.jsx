import React, { useState } from "react";
import Card from "../Card/Card";
import colors from "../../config/colors";
import Button from "../Button/Button";
import { BiLogoMongodb } from "react-icons/bi";
import { FaFigma, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import "./Skills.css";

export default function Skills() {
	let [screen, setScreen] = useState({
		height: window.screen.height,
		width: window.screen.width,
	});

	window.addEventListener("", (e) => {
		let myScreen = { ...screen };
		myScreen = { height: window.screen.height, width: window.screen.width };
		setScreen(myScreen);
		console.log(screen);
		e.stopPropagation();
	});

	return (
		<div style={styles.container} id="skillsContainer">
			<div>
				<div style={styles.text1} id="text">
					My
				</div>
				<div style={styles.text2} id="text">
					Skills
				</div>
				<Button
					text={"Download CV"}
					backgroundColor={colors.themeColor}
					borderColor={colors.white}
					maxWidth={"10vw"}
					marginTop={"10px"}
					size="3.25vmax"
					marginBotton={"10vmin"}
					fontSize="1.25vmax"
				/>
			</div>
			<Card
				text={"MongoDb"}
				marginTop={"8vw"}
				iconComponent={
					<BiLogoMongodb size={"8vmax"} color={colors.themeColor} />
				}
				className={"rightColSkillCards allSkillCards"}
			/>

			<Card
				text={"React"}
				className={"leftColSkillCards allSkillCards"}
			/>
			<Card
				text={"Figma"}
				iconComponent={
					<FaFigma size={"8vmax"} color={colors.themeColor} />
				}
				className={"rightColSkillCards allSkillCards"}
			/>
			<Card
				text={"React Native"}
				marginTop={"8vw"}
				iconComponent={
					<FaMobileAlt size={"8vmax"} color={colors.themeColor} />
				}
				className={"leftColSkillCards allSkillCards"}
			/>
			<Card
				text={"NodeJS"}
				iconComponent={
					<FaNodeJs size={"8vmax"} color={colors.themeColor} />
				}
				className={"rightColSkillCards allSkillCards "}
			/>
		</div>
	);
}

const styles = {
	container: {
		marginTop: "50px",
		display: "grid",
		width: "70vw",
		gridTemplateColumns: "auto auto auto",
		paddingLeft: "2vw",
		columnGap: "4vmax",
		// justifyContent: "center",
	},
	text1: {
		fontSize: "5vw",
		fontWeight: "40",
	},
	text2: {
		fontSize: "6vw",
		fontWeight: "650",
		color: colors.themeColor,
	},
};
