import React from "react";
import colors from "../../config/colors";
import "./HeroFrame.css";
import Button from "../Button/Button";
import MediaIcon from "../MediaIcon/MediaIcon";

export default function HeroFrame() {
	return (
		<div style={styles.container}>
			<MediaIcon />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					// justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div>
					<div style={styles.text1}>Salam! I am</div>
					<div className="heroName">Hamza Mohammad</div>
				</div>
				<Button
					text={"Know More"}
					size="40px"
					fontSize={"1vw"}
					marginTop={"8vh"}
					maxWidth={"6vw"}
				/>
			</div>
		</div>
	);
}

const styles = {
	container: {
		// marginTop: "8vh",
		height: "86vh",
		maxWidth: "100vw",

		display: "grid",
		gridTemplateColumns: "auto auto auto auto",
		alignItems: "center",
	},
	text1: {
		fontSize: "4vw",
		fontWeight: "800",
	},
};
