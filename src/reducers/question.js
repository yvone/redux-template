const initialState = {
    getQuestionsState: 'IDLE',
    getQuestionsError: null,
    saveQuestionsState: 'IDLE',
    saveQuestionsError: null,
    arr: [],
};

const questionReducer = (
    state = initialState,
    action,
) => {
    switch(action.type) {
        case 'GET_QUESTIONS_LOADING': {
            return {
                ...state,
                getQuestionsState: 'LOADING',
                getQuestionsError: null,
            }
        }
        case 'GET_QUESTIONS_ERROR': {
            return {
                ...state,
                getQuestionsState: 'ERROR',
                getQuestionsError: action.payload,
            }
        }
        case 'GET_QUESTIONS_SUCCESS': {
            return {
                ...state,
                getQuestionsState: 'READY',
                getQuestionsError: null,
                arr: action.payload,
            }
        }
        case 'SAVE_QUESTIONS_LOADING': {
            return {
                ...state,
                saveQuestionsState: 'LOADING',
                saveQuestionsError: null,
            }
        }
        case 'SAVE_QUESTIONS_ERROR': {
            return {
                ...state,
                saveQuestionsState: 'ERROR',
                saveQuestionsError: action.payload,
            }
        }
        case 'SAVE_QUESTIONS_SUCCESS': {
            return {
                ...state,
                saveQuestionsState: 'READY',
                saveQuestionsError: null,
            }
        }
        default: {
            return state;
        }
    }
};

export default questionReducer;