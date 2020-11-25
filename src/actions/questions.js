import { saveQuestion } from '../utils/api';
import { addNewQuestionToUser } from '../actions/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_POLL_ANSWER_TO_QUESTION = 'ADD_POLL_ANSWER_TO_QUESTION';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

export function addPollAnswerToQuestion(authUser, qid, answer) {
    return {
        type: ADD_POLL_ANSWER_TO_QUESTION,
        authUser,
        qid,
        answer
    };
}

export function addNewQuestion(question) {
    return {
        type: ADD_NEW_QUESTION,
        question

    };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
    return dispatch => {
        return saveQuestion({ optionOneText, optionTwoText, author }).then(
            question => {
                dispatch(addNewQuestion(question));
                dispatch(addNewQuestionToUser(question));
            }
        );
    };
}