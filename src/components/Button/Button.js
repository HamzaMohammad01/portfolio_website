import React from "react";
import colors from "../../config/colors";

export default function Button({
	text,
	borderColor = colors.themeColor,
	backgroundColor,
	marginRight = "2vw",
	marginLeft,
	size = "30px",
	marginTop,
	marginBotton,
	fontSize,
	maxWidth,
	otherProps,
}) {
	return (
		<div
			style={{
				border: `2px solid ${borderColor}`,
				borderRadius: "20px",
				backgroundColor: backgroundColor,
				padding: `10px ${size} 10px ${size}`,
				marginRight: marginRight,
				fontSize: fontSize,
				marginLeft: marginLeft,
				marginTop: marginTop,
				marginBottom: marginBotton,
				maxWidth: maxWidth,
				fontWeight: "700",
			}}
			{...otherProps}
		>
			{text}
		</div>
	);
}
