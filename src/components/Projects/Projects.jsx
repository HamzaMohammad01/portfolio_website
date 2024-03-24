import React from "react";
import colors from "../../config/colors";
import "./Projects.css";
import Card from "../Card/Card";

const projects = [
	{
		name: "Salah Time",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Salah Tim",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Salah Ti",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Salah Ti",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Salah Ti",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Salah Ti",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Salah Ti",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
	},
	{
		name: "Salah Ti",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia aspernatur nam",
		uri: "",
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
