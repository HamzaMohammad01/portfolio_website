import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import colors from "../../config/colors";

export default function MediaIcon({
	marginLeft,
	marginTop,
	marginBottom,
	marginRight,
	display = "block",
	color = colors.themeColor,
	spaceBetween,
}) {
	return (
		<div style={{ marginLeft, marginTop, marginBottom, marginRight }}>
			<FaInstagram
				color={color}
				size={"4vw"}
				display={display}
				style={{ marginRight: spaceBetween }}
			/>
			<FaYoutube
				color={color}
				size={"4vw"}
				display={display}
				style={{ marginRight: spaceBetween }}
			/>
			<FaWhatsapp color={color} size={"4vw"} display={display} />
		</div>
	);
}

const styles = {
	container: {},
};
