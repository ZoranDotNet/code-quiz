import styles from "./option.module.css";

function Option({ question, answer, dispatch }) {
	const hasAnswered = answer !== null;
	return (
		<div className={styles.optionsWrapper}>
			{question.options.map((option, index) => (
				<button
					className={`${styles.options} ${
						index === answer ? styles.answered : ""
					} ${
						hasAnswered
							? index === question.correctOption
								? styles.correct
								: styles.wrong
							: ""
					}`}
					key={index}
					disabled={hasAnswered}
					onClick={() => dispatch({ type: "newAnswer", payload: index })}>
					<span>{option}</span>
				</button>
			))}
		</div>
	);
}

export default Option;
