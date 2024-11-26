import { createContext, useContext, useReducer } from "react";

/* const QuizContext = createContext();

const initialState = {
	status: "start", // isLoading, actice, finished, start
	questions: [],
	options: [],
	answer: null,
	points: null,
	isLoading: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "isLoading":
			break;
	}
}

function QuizProvider({ children }) {
	const [{ status, questions, isLoading, answer, points }, dispatch] =
		useReducer(reducer, initialState);

	return (
		<QuizContext.Provider
			value={{
				status: "start",
				questions: [],
				options: [],
				answer: null,
				points: null,
				isLoading: false,
				dispatch,
			}}>
			{children}
		</QuizContext.Provider>
	);
}

function useQuiz() {
	const context = useContext(QuizContext);
	if (context === undefined) return new Error("using context outside Provider");

	return context;
}

export { QuizProvider, useQuiz }; */
