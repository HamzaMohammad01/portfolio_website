import React from "react";
import colors from "../../config/colors";

export default function TextInput({
	type = "text",
	name,
	value,
	onChange,
	size = "20px",
	multiline,
	marginTop,
	marginBottom,
	marginRight,
	marginLeft,
	otherProps,
}) {
	return !multiline ? (
		<input
			type={type}
			name={name}
			value={value || ""}
			onChange={onChange}
			{...otherProps}
			style={{
				backgroundColor: colors.black,
				padding: "10px",
				color: colors.white,
				fontSize: "21px",
				borderRadius: "10px",
				border: `2px solid ${colors.themeColor}`,
				display: "block",
				height: size,
				width: "30vw",
				marginTop,
				marginBottom,
				marginRight,
				marginLeft,
			}}
		/>
	) : (
		<textarea
			type={type}
			name={name}
			value={value || ""}
			onChange={onChange}
			{...otherProps}
			style={{
				backgroundColor: colors.black,
				padding: "10px",
				color: colors.white,
				fontSize: "21px",
				borderRadius: "10px",
				border: `2px solid ${colors.themeColor}`,
				display: "block",
				height: parseInt(size.slice(0, -2)) * 5,
				width: "30vw",
				marginTop,
				marginBottom,
				marginRight,
				marginLeft,
			}}
		/>
	);
}
