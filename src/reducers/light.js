const initialState = {
    lightIsOn: true,
};

const lightReducer = (
    state = initialState,
    action,
) => {
    switch(action.type) {
        case 'TURN_ON': {
            return {
                ...state,
                lightIsOn: true,
            }
        }
        case 'TURN_OFF': {
            return {
                ...state,
                lightIsOn: false,
            }
        }
        case 'TOOGLE': {
            return {
                ...state,
                lightIsOn: !state.lightIsOn,
            }
        }
        default: {
            return state;
        }
    }
};

export default lightReducer;