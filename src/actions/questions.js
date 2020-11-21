export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_POLL_ANSWER_TO_QUESTION = 'ADD_POLL_ANSWER_TO_QUESTION';

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