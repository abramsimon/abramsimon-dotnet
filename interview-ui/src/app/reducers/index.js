import { ASK_QUESTION } from '../constants/action-types';

const initialState = {
	suggestedQuestions: [
		'who are you?',
		'what is this project?',
		'what else can i ask?',
		'who is your daddy and what does he do?'
	],
	currentQuestion: null,
	answers: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case ASK_QUESTION:
		return { ...state, currentQuestion: action.payload };
	default:
		return state;
	}
};

export default rootReducer;
