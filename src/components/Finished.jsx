import { useEffect } from "react";
import styles from "./finished.module.css";
import endSound from "../sound/ta-da.mp3";
import click from "../sound/click.mp3";

function Finished({ score, dispatch, maxPoint }) {
	const percentage = (score / maxPoint) * 100;
	let emoji = "";
	if (percentage === 100) emoji = "🥇";
	if (percentage >= 80 && percentage < 100) emoji = "⭐";
	if (percentage >= 50 && percentage < 80) emoji = "👍";
	if (percentage >= 20 && percentage < 50) emoji = "🙄";
	if (percentage >= 0 && percentage < 20) emoji = "🤦‍♂️";

	useEffect(() => {
		const sound = new Audio(endSound);
		sound.volume = 0.1;
		sound.play();
	}, []);

	function handleClick() {
		const sound = new Audio(click);
		sound.volume = 0.6;
		sound.play();

		dispatch({ type: "playAgain" });
	}

	return (
		<section className={styles.wrapper}>
			<span className={styles.finished}>
				{emoji} You scored {score} / {maxPoint} points ({Math.ceil(percentage)}
				%)
			</span>
			<button className={styles.btn} onClick={() => handleClick()}>
				Play again
			</button>
		</section>
	);
}

export default Finished;
