const initialState = {
    arr: [],
    status: 'IDLE',
    error: null,
};

const faqReducer = (
    state = initialState,
    action,
) => {
    switch(action.type) {
        case 'GET_FAQS_LOADING':
        case 'CREATE_FAQ_LOADING':
        case 'UPDATE_FAQ_LOADING':
        case 'REMOVE_FAQ_LOADING': {
            return {
                ...state,
                status: 'LOADING',
                error: null,
            }
        }
        case 'GET_FAQS_ERROR':
        case 'CREATE_FAQ_ERROR':
        case 'UPDATE_FAQ_ERROR':
        case 'REMOVE_FAQ_ERROR': {
            return {
                ...state,
                status: 'ERROR',
                error: action.payload,
            }
        }
        case 'GET_FAQS_SUCCESS': {
            return {
                ...state,
                status: 'READY',
                error: null,
                arr: action.payload,
            }
        }
        case 'CREATE_FAQ_SUCCESS': {
            return {
                ...state,
                status: 'READY',
                error: null,
                arr: [
                    ...state.arr,
                    action.payload,
                ],
            }
        }
        case 'UPDATE_FAQ_SUCCESS': {
            const index = state.arr.findIndex(faq => {
                return faq.id === action.payload.id
            });

            return {
                ...state,
                status: 'READY',
                error: null,
                arr: [
                    ...state.arr.slice(0, index),
                    action.payload,
                    ...state.arr.slice(index + 1),
                ],
            }
        }
        case 'REMOVE_FAQ_SUCCESS': {
            const newArr = state.arr.filter(faq => {
                return faq.id !== action.payload
            });

            return {
                ...state,
                status: 'READY',
                error: null,
                arr: newArr,
            }
        }
        default: {
            return state;
        }
    }
};

export default faqReducer;