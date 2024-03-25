import React from "react";
import colors from "../../config/colors";
import { FaReact } from "react-icons/fa";
import Button from "../Button/Button";
import "./Card.css";

export default function Card({
	text,
	// iconComponent = <FaReact size={"8vmax"} color={colors.themeColor} />,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	size = "3vw",
	width = "fit-content",
	height = "fit-content",
	fontSize = "2.5vmax",
	description,
	className,
	button,
	margin,
}) {
	return (
		<div
			style={{
				padding: `5vw ${size} 5vw ${size} `,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				border: `2px solid ${colors.themeColor}`,
				height,
				width,
				borderRadius: "5vmin",
				textAlign: "center",
				marginTop: marginTop,
				marginBottom: marginBottom,
				marginRight: marginRight,
				marginLeft: marginLeft,
				margin,
			}}
			className={`${className} cards`}
		>
			{/* {iconComponent} */}
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
			{button && (
				<a
					href={button}
					target="_blank"
					style={{ textDecoration: "none" }}
					rel="noreferrer"
				>
					<Button
						text={"Get Source Code"}
						marginRight="0px"
						marginTop={"1.25vmax"}
						size="3vw"
						fontSize="1.5vmax"
						marginBotton={"2vmax"}
					/>
				</a>
			)}
		</div>
	);
}
