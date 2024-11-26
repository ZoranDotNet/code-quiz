import styles from "./footer.module.css";

function Footer({ dispatch, answer, index, numQuestions }) {
	if (answer === null) return null;

	if (index < numQuestions - 1) {
		return (
			<div className={styles.container}>
				<button
					className={styles.btn}
					onClick={() => dispatch({ type: "nextQuestion" })}>
					Next
				</button>
			</div>
		);
	}

	if (index === numQuestions - 1) {
		return (
			<div className={styles.container}>
				<button
					className={styles.btn}
					onClick={() => dispatch({ type: "finish" })}>
					Next
				</button>
			</div>
		);
	}
}

export default Footer;
