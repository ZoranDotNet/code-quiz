import { useReducer } from "react";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import Score from "./components/Score";
import Finished from "./components/Finished";
import Footer from "./components/Footer";
import Progressbar from "./components/Progressbar";

const initialState = {
	status: "start", // start, isLoading, active, finished, timeEnded
	questions: [],
	index: 0,
	answer: null,
	points: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case "isLoading":
			return { ...state, status: "isLoading" };

		case "prepareGame":
			return {
				...state,
				questions: action.payload,
				status: "active",
			};

		case "newAnswer": {
			const question = state.questions.at(state.index);

			return {
				...state,
				answer: action.payload,
				points:
					action.payload === question.correctOption
						? state.points + question.points
						: state.points,
			};
		}

		case "nextQuestion":
			return {
				...state,
				index: state.index + 1,
				answer: null,
			};

		case "finish":
			return {
				...state,
				status: "finished",
			};

		case "timeEnd":
			return { ...state, status: "timeEnded" };

		case "playAgain":
			return {
				...state,
				index: 0,
				status: "start",
				points: 0,
				answer: null,
				questions: [],
			};

		default:
			throw new Error("Something went wrong");
	}
}

function App() {
	const [{ status, questions, index, answer, points }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const numQuestions = questions.length;
	const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

	return (
		<>
			{status === "start" && <StartScreen dispatch={dispatch} />}

			{status === "isLoading" && <Spinner />}
			{status !== "start" && <Header />}
			{status === "active" && (
				<Score index={index} questions={questions} score={points} />
			)}
			{status === "active" && (
				<Questions
					question={questions[index]}
					answer={answer}
					dispatch={dispatch}
				/>
			)}
			{status === "active" || status === "timeEnded" ? (
				<Progressbar dispatch={dispatch} answer={answer} />
			) : null}

			{status === "active" && answer !== null && (
				<Footer
					dispatch={dispatch}
					answer={answer}
					numQuestions={numQuestions}
					index={index}
				/>
			)}

			{status === "finished" && (
				<Finished score={points} dispatch={dispatch} maxPoint={maxPoints} />
			)}
		</>
	);
}

export default App;
