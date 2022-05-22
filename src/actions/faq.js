export const addFaq = (faq) => {
    // Mock id - random number
    const id = Math.floor(Math.random() * 1000);

    return {
        type: 'ADD_FAQ',
        payload: {
            id,
            ...faq,
        }
    };
}
export const updateFaq = (newFaq) => {
    return {
        type: 'UPDATE_FAQ',
        payload: newFaq
    };
}
export const removeFaq = (faq) => {
    return {
        type: 'REMOVE_FAQ',
        payload: faq
    };
}
export const removeAll = () => {
    return {
        type: 'REMOVE_ALL'
    };
}