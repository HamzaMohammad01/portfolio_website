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
	placeholder,
}) {
	return !multiline ? (
		<input
			type={type}
			name={name}
			value={value || ""}
			onChange={onChange}
			placeholder={placeholder}
			style={{
				backgroundColor: colors.black,
				padding: "10px",
				color: colors.white,
				fontSize: "21px",
				borderRadius: "2vmin",
				border: `2px solid ${colors.themeColor}`,
				display: "block",
				height: size,
				width: "30vmax",
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
			placeholder={placeholder}
			maxLength={2000}
			style={{
				backgroundColor: colors.black,
				padding: "10px",
				color: colors.white,
				fontSize: "21px",
				borderRadius: "2vmin",
				border: `2px solid ${colors.themeColor}`,
				display: "block",
				height: parseInt(size.slice(0, -2)) * 5,
				width: "30vmax",
				marginTop,
				marginBottom,
				marginRight,
				marginLeft,
			}}
		/>
	);
}
