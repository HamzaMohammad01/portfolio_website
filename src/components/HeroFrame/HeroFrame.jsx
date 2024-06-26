import React from "react";
import "./HeroFrame.css";
import Button from "../Button/Button";
import MediaIcon from "../MediaIcon/MediaIcon";

export default function HeroFrame({ refs }) {
	const handleOnClick = (ref) => {
		window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
	};
	return (
		<main style={styles.container}>
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
					onClick={() => handleOnClick(refs.aboutRef)}
				/>
			</div>
		</main>
	);
}

const styles = {
	container: {
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
		animation: "move 1s linear 0.5s infinite alternate-reverse",
	},
};
