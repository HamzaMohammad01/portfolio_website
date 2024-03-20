import React from "react";
import colors from "../../config/colors";
import { FaReact } from "react-icons/fa";
import Button from "../Button/Button";

export default function Card({
	text,
	iconComponent = <FaReact size={"8vw"} color={colors.themeColor} />,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	fontSize = "2vw",
	description,
}) {
	return (
		<div>
			<div
				style={{
					alignItems: "center",
					justifyContent: "center",
					display: "flex",
					flexDirection: "column",
					border: `2px solid ${colors.themeColor}`,
					height: "23vw",
					width: "16vw",
					borderRadius: "30px",
					marginTop: marginTop,
					marginBottom: marginBottom,
					marginRight: marginRight,
					marginLeft: marginLeft,
				}}
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
							fontSize: "23px",
							marginTop: "20px",
							textAlign: "center",
						}}
					>
						{description}
					</div>
				)}
				<Button
					text={"Know More"}
					marginRight="0px"
					marginTop={"30px"}
					size="3vw"
				/>
			</div>
		</div>
	);
}

const styles = {};
