import React from "react";
import Card from "../Card/Card";
import colors from "../../config/colors";
import Button from "../Button/Button";
import { BiLogoMongodb } from "react-icons/bi";
import { FaFigma, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import "./Skills.css";

export default function Skills() {
	return (
		<div style={styles.container} id="skillsContainer">
			<div style={styles.column1}>
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
					fontSize="1.25vmax"
				/>
				<Card
					text={"React"}
					marginTop={"10vw"}
					iconComponent={
						<FaFigma size={"8vw"} color={colors.themeColor} />
					}
				/>
			</div>
			<div style={styles.column2}>
				<Card
					text={"MongoDb"}
					marginTop={"8vw"}
					iconComponent={
						<BiLogoMongodb size={"8vw"} color={colors.themeColor} />
					}
				/>
				<Card
					text={"MongoDb"}
					marginTop={"5vw"}
					iconComponent={
						<FaMobileAlt size={"8vw"} color={colors.themeColor} />
					}
				/>
			</div>
			<div style={styles.column3}>
				<Card text={"MongoDb"} />
				<Card
					text={"MongoDb"}
					marginTop={"5vw"}
					iconComponent={
						<FaNodeJs size={"8vw"} color={colors.themeColor} />
					}
				/>
			</div>
		</div>
	);
}

const styles = {
	container: {
		marginTop: "50px",
		display: "grid",
		gridTemplateColumns: "auto auto auto auto auto",
		paddingLeft: "2vw",
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
