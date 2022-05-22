const initialState = {
    arr: [],
};

const questionReducer = (
    state = initialState,
    action,
) => {
    switch(action.type) {
        case 'SAVE_QUESTIONS': {
            return {
                ...state,
                arr: action.payload,
            }
        }
        default: {
            return state;
        }
    }
};

export default questionReducer;