import React from "react";
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
					alignItems: "center",
				}}
			>
				<div>
					<div style={styles.text1}>Salam! I am</div>
					<div className="heroName">Hamza Mohammad</div>
				</div>
				<Button
					text={"Know More"}
					size="2vw"
					fontSize={"1.35vmax"}
					marginTop={"2vw"}
				/>
			</div>
		</div>
	);
}

const styles = {
	container: {
		// marginTop: "8vh",
		margin: "auto 0px auto 0px",
		height: "100vh",
		maxWidth: "100vw",

		display: "grid",
		gridTemplateColumns: "auto auto auto auto",
		alignItems: "center",
	},
	text1: {
		fontSize: "4vmax",
		fontWeight: "800",
	},
};
