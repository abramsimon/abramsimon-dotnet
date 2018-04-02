import { ASK_QUESTION } from '../constants/action-types';

export const askQuestion = question => ({ 
	type: ASK_QUESTION, 
	payload: question 
});
