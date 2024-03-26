import React from "react";
import { FaGithubAlt, FaYoutube, FaWhatsapp } from "react-icons/fa";
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
		<section style={{ marginLeft, marginTop, marginBottom, marginRight }}>
			<a
				href="https://github.com/HamzaMohammad01"
				target="_blank"
				rel="noreferrer"
				aria-label="Hamza Mohamamd Github Account"
			>
				<FaGithubAlt
					color={color}
					size={iconSize}
					display={display}
					style={{ marginRight: spaceBetween }}
					className={`mediaIcon ${className}`}
				/>
			</a>
			<a
				href="https://www.youtube.com/@hamzamohammad01"
				target="_blank"
				rel="noreferrer"
				aria-label="Hamza Mohamamd Youtube Account"
			>
				<FaYoutube
					color={color}
					size={iconSize}
					display={display}
					style={{ marginRight: spaceBetween }}
					className={`mediaIcon ${className}`}
				/>
			</a>
			<a href="//wa.me/+916388910725" target="_blank" rel="noreferrer">
				<FaWhatsapp
					color={color}
					size={iconSize}
					display={display}
					className={`mediaIcon ${className}`}
					aria-label="Hamza Mohamamd Whatsapp Number"
				/>
			</a>
		</section>
	);
}
