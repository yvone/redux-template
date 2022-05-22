export const saveQuestions = (questions) => {
    return {
        type: 'SAVE_QUESTIONS',
        payload: questions
    };
}
