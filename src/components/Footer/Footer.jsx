import React from "react";
import colors from "../../config/colors";
import MediaIcon from "../MediaIcon/MediaIcon";

export default function Footer() {
	return (
		<div style={styles.container}>
			<div>mohd2010Hamza@gmail.com</div>
			<MediaIcon
				display="relative"
				color="white"
				marginTop={"30px"}
				iconSize="4vmax"
				spaceBetween={"1vmax"}
				className={"mediaRowIcon"}
			/>
		</div>
	);
}

const styles = {
	container: {
		backgroundColor: colors.themeColor,
		height: "15vmax",
		marginTop: "100px",
		borderRadius: "10vmin  10vmin 0px 0px",
		TextAlign: "center",
		fontSize: "2.5vmax",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
};
