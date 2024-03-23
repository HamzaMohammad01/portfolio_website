import React from "react";
import {
	FaChevronLeft,
	FaChevronRight,
	FaDotCircle,
	// FaRegDotCircle,
} from "react-icons/fa";
import colors from "../../config/colors";
import Card from "../Card/Card";

export default function Carousal({ array, className }) {
	return (
		<div style={styles.container} className={className}>
			<FaChevronLeft size={"5vw"} color={colors.themeColor} />
			{array.map((e) => (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Card text={e.name} description={e.description} />
					<FaDotCircle style={styles.dot} />
				</div>
			))}
			<FaChevronRight size={"5vw"} color={colors.themeColor} />
		</div>
	);
}

const styles = {
	container: {
		display: "flex",

		marginTop: "2vmax",
		alignItems: "center",
		justifyContent: "space-around",
	},
	dot: {
		color: colors.themeColor,
		marginTop: "1.5vmax",
	},
};
