import React from "react";
import Card from "../Card/Card";
import colors from "../../config/colors";
import Button from "../Button/Button";
import { BiLogoMongodb } from "react-icons/bi";
import { FaFigma, FaNodeJs, FaMobileAlt, FaReact } from "react-icons/fa";
import "./Skills.css";

export default function Skills({ myRef }) {
	return (
		<main style={styles.container} id="skillsContainer" ref={myRef}>
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
					className={"responsive"}
				/>
			</div>
			<Card
				text={"MongoDb"}
				iconComponent={
					<BiLogoMongodb size={"8vmax"} color={colors.themeColor} />
				}
				className={"rightColSkillCards allSkillCards mt"}
				width={"12vmax"}
			/>

			<Card
				text={"React"}
				iconComponent={
					<FaReact size={"8vmax"} color={colors.themeColor} />
				}
				className={"leftColSkillCards allSkillCards"}
				width={"12vmax"}
			/>
			<Card
				text={"Figma"}
				iconComponent={
					<FaFigma size={"8vmax"} color={colors.themeColor} />
				}
				className={"rightColSkillCards allSkillCards"}
				width={"12vmax"}
			/>
			<Card
				text={"React Native"}
				iconComponent={
					<FaMobileAlt size={"8vmax"} color={colors.themeColor} />
				}
				className={"leftColSkillCards allSkillCards mt"}
				width={"12vmax"}
			/>
			<Card
				text={"NodeJS"}
				iconComponent={
					<FaNodeJs size={"8vmax"} color={colors.themeColor} />
				}
				className={"rightColSkillCards allSkillCards "}
				width={"12vmax"}
			/>
		</main>
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
