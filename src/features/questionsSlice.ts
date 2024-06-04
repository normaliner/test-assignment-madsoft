import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../interfaces/questions'



const initialState: IInitialState = {
	currentQuestionIndex: 0,
	answers: [],
	isTestCompleted: false,
	remainingTime: 20 * 60,
};

export const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setQuestionIndex(state, action: PayloadAction<number>) {
			state.currentQuestionIndex = action.payload;
		},
		saveAnswer(
			state,
			action: PayloadAction<{
				questionIndex: number;
				answer: string | string[];
			}>
		) {
			const { questionIndex, answer } = action.payload;
			if (typeof answer === 'string' || Array.isArray(answer)) {
				state.answers = [
					...state.answers.filter(answer => answer.id !== questionIndex),
					{ id: questionIndex, result: answer },
				];
			}
		},
		completeTest(state) {
			state.isTestCompleted = true;
		},
		nextQuestion(state) {
			state.currentQuestionIndex += 1;
		},
		decrementTime(state) {
			if (state.remainingTime > 0) {
				state.remainingTime -= 1;
			} else {
				state.isTestCompleted = true;
			}
		},
		resetState(state) {
			state.currentQuestionIndex = initialState.currentQuestionIndex;
			state.answers = initialState.answers;
			state.isTestCompleted = initialState.isTestCompleted;
			state.remainingTime = initialState.remainingTime;
		},
	},
});
export const {
	setQuestionIndex,
	saveAnswer,
	completeTest,
	decrementTime,
	nextQuestion,
	resetState,
} = questionsSlice.actions;

export default questionsSlice.reducer;
