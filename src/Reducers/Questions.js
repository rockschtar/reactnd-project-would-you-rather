import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../Actions/Questions';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION:
            const { question } = action;

            return {
                ...state,
                [question.id]: question,
            };
        case ANSWER_QUESTION:
            const { authedUser, questionId, answer } = action;

            return {
                ...state,
                [questionId]: {
                    ...state[questionId],
                    [answer]: {
                        ...state[questionId][answer],
                        votes: state[questionId][answer].votes.concat(authedUser)
                    }
                }
            };
        default:
            return state;
    }
}
