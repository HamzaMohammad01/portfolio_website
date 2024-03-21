import React from "react";
import colors from "../../config/colors";

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
	maxWidth,
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
				width: "fit-content",
				fontWeight: "700",
				textWrap: "nowrap",
			}}
			{...otherProps}
		>
			{text}
		</div>
	);
}
