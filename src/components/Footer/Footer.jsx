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
				spaceBetween={"20px"}
			/>
		</div>
	);
}

const styles = {
	container: {
		backgroundColor: colors.themeColor,
		height: "20vh",
		marginTop: "100px",
		borderRadius: "100px  100px 0px 0px",
		TextAlign: "center",
		fontSize: "25px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
};
