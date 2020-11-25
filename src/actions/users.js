import { saveQuestionAnswer } from '../utils/api';
import { addPollAnswerToQuestion } from '../actions/questions';


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_POLL_ANSWER_TO_USER = 'ADD_POLL_ANSWER_TO_USER';
export const ADD_NEW_QUESTION_TO_USER = 'ADD_NEW_QUESTION_TO_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

function addPollAnswerToUser(authUser, qid, answer) {
    return {
        type: ADD_POLL_ANSWER_TO_USER,
        authUser,
        qid,
        answer
    };
}

export function addNewQuestionToUser(id, author) {
    return {
        type: ADD_NEW_QUESTION_TO_USER,
        id,
        author
    };
}

export function handleSaveQuestionAnswer(authUser, qid, answer) {
    return dispatch => {
        dispatch(addPollAnswerToUser(authUser, qid, answer));
        dispatch(addPollAnswerToQuestion(authUser, qid, answer));

        return saveQuestionAnswer(authUser, qid, answer).catch(e => {
            console.warn('Error in handleSaveQuestionAnswer:', e);
        });
    };
}