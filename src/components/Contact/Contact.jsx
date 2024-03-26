import React, { useState } from "react";
import colors from "../../config/colors";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import "./Contact.css";

export default function Contact({ myRef }) {
	const [inputs, setInputs] = useState({});
	const userNameRe = /^[a-zA-Z0-9]+$/;
	const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const descriptionRe = /^.{1,4000}$/;
	const [disabled, setDisabled] = useState(
		!(
			userNameRe.test(inputs.username) &&
			emailRe.test(inputs.email) &&
			descriptionRe.test(inputs.description)
		)
	);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
		if (value.length === 0) setDisabled(true);
		else {
			setDisabled(
				!(
					userNameRe.test(inputs.username) &&
					emailRe.test(inputs.email) &&
					descriptionRe.test(inputs.description)
				)
			);
		}
	};

	return (
		<aside style={styles.container} className="container" ref={myRef}>
			<div style={styles.textContainer} className="textContainer">
				<div style={styles.text1} className="text1">
					Get
				</div>
				<div style={styles.text1} className="text1">
					In
				</div>
				<div style={styles.text2} className="text2">
					Touch
				</div>
			</div>
			<form
				action="https://formbold.com/s/67GbB"
				method="POST"
				className="form"
				style={styles.form}
			>
				<TextInput
					type="text"
					name="username"
					value={inputs.username || ""}
					onChange={handleChange}
					placeholder={"Name"}
				/>
				<TextInput
					type="email"
					name="email"
					value={inputs.email || ""}
					onChange={handleChange}
					placeholder={"Email"}
					marginTop={"1.5vw"}
				/>
				<TextInput
					type="text"
					name="description"
					value={inputs.description || ""}
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
					size="5vmax"
					marginTop={"2vw"}
					onClick={() => setInputs({})}
					disabled={disabled}
				/>
			</form>
		</aside>
	);
}

const styles = {
	container: {
		marginTop: "100px",
		display: "grid",
		gridTemplateColumns: "auto auto",
	},
	textContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		margin: "auto",
	},
	text1: {
		fontSize: "5vmax",
		fontWeight: "100",
	},
	text2: {
		marginTop: "-2vmax",
		fontSize: "7vmax",
		color: colors.themeColor,
		fontWeight: "650",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "fit-content",
	},
};
