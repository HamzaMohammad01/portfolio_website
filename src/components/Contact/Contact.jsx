import React, { useState } from "react";
import colors from "../../config/colors";
import TextInput from "../TextInput/TextInput";
import MediaIcon from "../MediaIcon/MediaIcon";
import Button from "../Button/Button";

export default function Contact() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(inputs);
	};
	return (
		<div style={styles.container}>
			<div style={styles.textContainer}>
				<div style={styles.text1}>Get</div>
				<div style={styles.text1}>In</div>
				<div style={styles.text2}>Touch</div>
			</div>
			<form onSubmit={handleSubmit} style={styles.form}>
				<TextInput
					type="text"
					name="username"
					value={inputs.username || ""}
					onChange={handleChange}
					placeholder={"Name"}
				/>
				<TextInput
					type="text"
					name="username"
					value={inputs.username || ""}
					onChange={handleChange}
					placeholder={"Email"}
					marginTop={"1.5vw"}
				/>
				<TextInput
					type="text"
					name="age"
					value={inputs.age || ""}
					multiline
					onChange={handleChange}
					placeholder={"Description"}
					marginTop={"1.5vw"}
				/>
				<Button
					text={"Send"}
					borderColor={colors.white}
					backgroundColor={colors.themeColor}
					type={"submit"}
					marginTop={"2vw"}
				/>
			</form>
			{/* <MediaIcon
				marginLeft={"auto"}
				marginTop={"auto"}
				marginBottom={"auto"}
				marginRight={"1.5vw"}
			/> */}
		</div>
	);
}

const styles = {
	container: {
		marginTop: "100px",
		display: "grid",
		gridTemplateColumns: "auto auto auto",
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		margin: "auto",
	},
	text1: {
		fontSize: "7vw",
		fontWeight: "100",
	},
	text2: {
		fontSize: "9vw",
		color: colors.themeColor,
		fontWeight: "650",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},
};