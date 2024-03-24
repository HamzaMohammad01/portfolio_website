import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import colors from "../../config/colors";
import "./MediaIcon.css";

export default function MediaIcon({
	marginLeft,
	marginTop,
	marginBottom,
	marginRight,
	display = "block",
	iconSize = "3.5vmax",
	color = colors.themeColor,
	spaceBetween,
	className,
}) {
	return (
		<div style={{ marginLeft, marginTop, marginBottom, marginRight }}>
			<FaInstagram
				color={color}
				size={iconSize}
				display={display}
				style={{ marginRight: spaceBetween }}
				className={`mediaIcon ${className}`}
			/>
			<a href="https://www.youtube.com/@hamzamohammad01" target="_blank">
				<FaYoutube
					color={color}
					size={iconSize}
					display={display}
					style={{ marginRight: spaceBetween }}
					className={`mediaIcon ${className}`}
				/>
			</a>
			<a href="//wa.me/+916388910725" target="_blank">
				<FaWhatsapp
					color={color}
					size={iconSize}
					display={display}
					className={`mediaIcon ${className}`}
				/>
			</a>
		</div>
	);
}
