import React from "react";

export default function About({ myRef }) {
	return (
		<div style={styles.container} ref={myRef}>
			اَلسَّلَامُ عَلَيْكُمْ(Peace be upon you.). I am Hamza Mohammad, A
			full-stack web developer with JavaScript as my primary language and
			with some basic knowledge of languages like Python, Java and Swift.
			I am currently a student with the knowledge of a diverse set of
			technologies and frameworks of the world of web development.
		</div>
	);
}

const styles = {
	container: {
		padding: "0vw 2vw 0vw 2vw",
		fontSize: 23,
		textAlign: "center",
	},
};
