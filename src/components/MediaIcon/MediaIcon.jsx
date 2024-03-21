import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import colors from "../../config/colors";

export default function MediaIcon({
	marginLeft,
	marginTop,
	marginBottom,
	marginRight,
	display = "block",
	iconSize = "3.5vmax",
	color = colors.themeColor,
	spaceBetween,
}) {
	return (
		<div style={{ marginLeft, marginTop, marginBottom, marginRight }}>
			<FaInstagram
				color={color}
				size={iconSize}
				display={display}
				style={{ marginRight: spaceBetween }}
			/>
			<FaYoutube
				color={color}
				size={iconSize}
				display={display}
				style={{ marginRight: spaceBetween }}
			/>
			<FaWhatsapp color={color} size={iconSize} display={display} />
		</div>
	);
}

const styles = {
	container: {},
};
