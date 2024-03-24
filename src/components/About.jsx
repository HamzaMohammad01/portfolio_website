import React from "react";

export default function About({ myRef }) {
	return (
		<div style={styles.container} ref={myRef}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi
			odio ducimus eum perferendis veniam sit hic iusto autem expedita a
			aliquam, unde deserunt saepe nihil! Aliquam dolor fuga, ipsa soluta
			doloremque doloribus dolorem consequatur quod id laudantium totam
			explicabo. Similique voluptatibus totam sed dolorum ex quaerat porro
			minus dignissimos veritatis consectetur eaque, et voluptas ratione
			labore maxime reiciendis non, ad facilis reprehenderit! Recusandae
			illum deserunt explicabo quas. Consequuntur hic dignissimos,
			reprehenderit repudiandae consectetur sapiente aliquid magnam
			perspiciatis corporis, molestiae delectus, neque blanditiis iure
			obcaecati animi illo ducimus quae at quibusdam eum harum! Iure,
			repellendus quod dolores unde aliquam eveniet?
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
