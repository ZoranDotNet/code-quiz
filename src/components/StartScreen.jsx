import reactLogo from "../assets/reactlogo.png";
import jslogo from "../assets/js-icon.svg";
import styles from "./startScreen.module.css";
import csharp from "../assets/c-sharp.svg";
import cssicon from "../assets/css-icon.svg";
import clickSound from "../sound/click.mp3";

function StartScreen({ dispatch }) {
	function loadQuestions(nr) {
		//dispatch({ type: "isLoading" });
		async function getData() {
			try {
				const data = await import(`../data/questions${nr}.json`);
				// console.log(data.questions);
				dispatch({
					type: "prepareGame",
					payload: data.questions,
				});
			} catch (error) {
				console.log(error);
			}
		}
		getData();
	}

	function handleClick(nr) {
		loadQuestions(nr);
		const sound = new Audio(clickSound);
		sound.play();
	}

	return (
		<div className={styles.wrapper}>
			<h1>Welcome to Code Quiz</h1>
			<h3>Pick a topic</h3>
			<div className={styles.boxContainer}>
				<div className={styles.box} onClick={() => handleClick(1)}>
					<h2>React</h2>
					<p>15 questions</p>
					<img src={reactLogo} alt="React logo" />
				</div>
				<div className={styles.box} onClick={() => handleClick(2)}>
					<h2>Javascript</h2>
					<p>15 questions</p>
					<img src={jslogo} alt="Javascript logo" />
				</div>
				<div className={styles.box} onClick={() => handleClick(3)}>
					<h2>C#</h2>
					<p>15 questions</p>
					<img src={csharp} alt="C# logo" />
				</div>
				<div className={styles.box} onClick={() => handleClick(4)}>
					<h2>CSS</h2>
					<p>15 questions</p>
					<img src={cssicon} alt="Css logo" />
				</div>
			</div>
		</div>
	);
}

export default StartScreen;
