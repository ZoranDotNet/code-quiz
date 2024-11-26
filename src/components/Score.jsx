import styles from "./score.module.css";

function Score({ index, questions, score }) {
	return (
		<section className={styles.score}>
			<p>
				Question: {index + 1} / {questions.length}
			</p>
			{score !== 0 ? <p>Score: {score}</p> : ""}
		</section>
	);
}

export default Score;
