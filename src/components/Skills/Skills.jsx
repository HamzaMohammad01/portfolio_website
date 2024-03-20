import React from "react";
import Card from "../Card/Card";
import colors from "../../config/colors";
import Button from "../Button/Button";
import { BiLogoMongodb } from "react-icons/bi";
import { FaFigma, FaNodeJs, FaMobileAlt } from "react-icons/fa";

export default function Skills() {
	return (
		<div style={styles.container}>
			<div style={styles.column1}>
				<div style={styles.text1}>My</div>
				<div style={styles.text2}>Skills</div>
				<Button
					text={"Download CV"}
					backgroundColor={colors.themeColor}
					borderColor={colors.white}
					maxWidth={"8vw"}
				/>
				<Card text={"React"} marginTop={"200px"} />
			</div>
			<div style={styles.column2}>
				<Card
					text={"MongoDb"}
					marginTop={"150px"}
					iconComponent={
						<BiLogoMongodb size={"8vw"} color={colors.themeColor} />
					}
				/>
				<Card
					text={"MongoDb"}
					marginTop={"100px"}
					iconComponent={
						<FaMobileAlt size={"8vw"} color={colors.themeColor} />
					}
				/>
			</div>
			<div style={styles.column3}>
				<Card text={"MongoDb"} />
				<Card
					text={"MongoDb"}
					marginTop={"100px"}
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
		gridTemplateColumns: "auto auto auto auto",
		paddingLeft: "2vw",
	},
	column1: {
		marginRight: "20px",
	},
	text1: {
		fontSize: "100px",
		fontWeight: "40",
	},
	text2: {
		fontSize: "100px",
		fontWeight: "650",
		color: colors.themeColor,
	},
};
