import React from "react";
import colors from "../../config/colors";
import { FaReact } from "react-icons/fa";
import Button from "../Button/Button";
import "./Card.css";

export default function Card({
	text,
	iconComponent = <FaReact size={"8vmax"} color={colors.themeColor} />,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	fontSize = "2.5vmax",
	description,
	className,
}) {
	return (
		<div
			style={{
				padding: "5vw 3vw 5vw 3vw ",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				border: `2px solid ${colors.themeColor}`,
				height: "fit-content",
				width: "fit-content",
				borderRadius: "5vmin",
				maxWidth: "50vw",
				marginTop: marginTop,
				marginBottom: marginBottom,
				marginRight: marginRight,
				marginLeft: marginLeft,
			}}
			className={className}
		>
			{iconComponent}
			<div
				style={{
					fontSize: fontSize,
					marginTop: "20px",
				}}
			>
				{text}
			</div>
			{description && (
				<div
					style={{
						fontSize: "1.75vmax",
						marginTop: "1vw",
						textAlign: "center",
					}}
				>
					{description}
				</div>
			)}
			<Button
				text={"Know More"}
				marginRight="0px"
				marginTop={"1.25vmax"}
				size="3vw"
				fontSize="1.5vmax"
			/>
		</div>
	);
}
