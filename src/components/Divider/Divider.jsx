import React from "react";
import colors from "../../config/colors";

export default function Divider({
	color = colors.white,
	marginTop = "10px",
	marginBottom = "10px",
}) {
	return (
		<div
			style={{
				// height: "1px",
				width: "100%",
				// backgroundColor: "white",
				marginTop,
				marginBottom,
				border: `1px solid ${color}`,
			}}
		></div>
	);
}
