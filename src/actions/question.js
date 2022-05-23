import {
    getQuestions as apiGetQuestions,
    saveQuestions as apiSaveQuestions,
} from '../api/questions';

export const getQuestionsLoading = () => {
    return {
        type: 'GET_QUESTIONS_LOADING'
    };
}

export const getQuestionsError = (error) => {
    return {
        type: 'GET_QUESTIONS_ERROR',
        payload: error,
    };
}

export const getQuestionsSuccess = (questions) => {
    return {
        type: 'GET_QUESTIONS_SUCCESS',
        payload: questions,
    };
}

export const getQuestions = () => async (dispatch) => {
    try {
        dispatch(getQuestionsLoading());
        const response = await apiGetQuestions();
        dispatch(getQuestionsSuccess(response.data));
    } catch (error) {
        dispatch(getQuestionsError(error));
    }
};

export const saveQuestionsLoading = () => {
    return {
        type: 'SAVE_QUESTIONS_LOADING'
    };
}

export const saveQuestionsError = (error) => {
    return {
        type: 'SAVE_QUESTIONS_ERROR',
        payload: error,
    };
}

export const saveQuestionsSuccess = () => {
    return {
        type: 'SAVE_QUESTIONS_SUCCESS',
    };
}

export const saveQuestions = (questions) => async (dispatch) => {
    try {
        dispatch(saveQuestionsLoading());
        await apiSaveQuestions(questions);
        dispatch(saveQuestionsSuccess());
    } catch (error) {
        dispatch(saveQuestionsError(error));
    }
};