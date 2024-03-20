import React from "react";
import colors from "../../config/colors";
import Button from "../Button/Button";

export default function Navbar() {
	return (
		<div style={styles.container}>
			<div style={styles.rightContainer}>
				<div style={styles.logoBorder}></div>
			</div>
			<div style={styles.navContainer}>
				<Button text={"Home"} />
				<Button text={"Skills"} />
				<Button text={"Projects"} />
				<Button text={"Contact"} />
				<Button
					text={"Hire Me!"}
					backgroundColor={colors.themeColor}
					borderColor={colors.white}
				/>
			</div>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		alignItems: "center",
		fontWeight: "800",
		maxheight: "20vh",
		position: "absolute",
		width: "100%",
		justifyContent: "space-between",
	},
	rightContainer: {
		flex: 1,
	},
	logoBorder: {
		border: `2px solid ${colors.themeColor}`,
		borderRadius: "100px",
		height: "125px",
		width: "125px",
	},
	navContainer: {
		display: "flex",
		justifyContent: "flex-end",
		flex: 1,
	},
};
