const initialState = {
    arr: [],
};

const faqReducer = (
    state = initialState,
    action,
) => {
    switch(action.type) {
        case 'ADD_FAQ': {
            return {
                ...state,
                arr: [
                    ...state.arr,
                    action.payload,
                ],
            }
        }
        case 'REMOVE_FAQ': {
            const newArr = state.arr.filter(faq => {
                return faq.id !== action.payload
            });

            return {
                ...state,
                arr: newArr,
            }
        }
        case 'REMOVE_ALL': {
            return {
                ...state,
                arr: [],
            }
        }
        case 'UPDATE_FAQ': {
            const index = state.arr.findIndex(faq => {
                return faq.id === action.payload.id
            });

            return {
                ...state,
                arr: [
                    ...state.arr.slice(0, index),
                    action.payload,
                    ...state.arr.slice(index + 1),
                ],
            }
        }
        default: {
            return state;
        }
    }
};

export default faqReducer;