import React from "react";
import colors from "../../config/colors";
import "./Button.css";

export default function Button({
	text,
	borderColor = colors.themeColor,
	backgroundColor,
	marginRight = "2vw",
	marginLeft,
	size = "5vmin",
	marginTop,
	marginBotton,
	fontSize = "1em",
	width = "fit-content",
	maxWidth,
	className,
	onClick,
	otherProps,
}) {
	return (
		<div
			style={{
				border: `2px solid ${borderColor}`,
				borderRadius: "25vmin",
				backgroundColor: backgroundColor,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: `10px ${size} 10px ${size}`,
				marginRight: marginRight,
				fontSize: fontSize,
				marginLeft: marginLeft,
				marginTop: marginTop,
				marginBottom: marginBotton,
				maxWidth: maxWidth,
				height: "fit-content",
				width,
				fontWeight: "700",
				textWrap: "nowrap",
			}}
			{...otherProps}
			className={`btn ${className}`}
			onClick={onClick}
		>
			{text}
		</div>
	);
}
