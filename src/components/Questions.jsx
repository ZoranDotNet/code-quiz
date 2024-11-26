import Option from "./Option";
import styles from "./question.module.css";

function Questions({ question, answer, dispatch }) {
	return (
		<>
			<h3 className={styles.question}>{question.question}</h3>
			<div className={styles.optionsWrapper}>
				<Option question={question} answer={answer} dispatch={dispatch} />
			</div>
		</>
	);
}

export default Questions;
