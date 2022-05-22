const initialState = {
    counter: 100,
};

const counterReducer = (
    state = initialState,
    action,
) => {
    switch(action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                counter: state.counter + 1,
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                counter: state.counter - action.payload,
            }
        }
        default: {
            return state;
        }
    }
};

export default counterReducer;