export const increment = () => {
    return {
        type: 'INCREMENT'
    }
};

export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num,
    }
};

// middleware