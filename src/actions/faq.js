import {
    apiGetFaqs,
    apiCreateFaq,
    apiUpdateFaq,
    apiRemoveFaq,
} from '../api/faqs';

/** GET FAQS */
const getFaqsLoading = () => {
    return {
        type: 'GET_FAQS_LOADING'
    };
}
const getFaqsError = (error) => {
    return {
        type: 'GET_FAQS_ERROR',
        payload: error,
    };
}
const getFaqsSuccess = (faqs) => {
    return {
        type: 'GET_FAQS_SUCCESS',
        payload: faqs,
    };
}
export const getFaqs = () => async (dispatch) => {
    try {
        dispatch(getFaqsLoading());
        const response = await apiGetFaqs();
        dispatch(getFaqsSuccess(response.data));
    } catch (error) {
        dispatch(getFaqsError(error));
    }
};

/** CREATE ONE FAQ */
const createFaqLoading = () => {
    return {
        type: 'CREATE_FAQ_LOADING'
    };
}
const createFaqError = (error) => {
    return {
        type: 'CREATE_FAQ_ERROR',
        payload: error,
    };
}
const createFaqSuccess = (faq) => {
    return {
        type: 'CREATE_FAQ_SUCCESS',
        payload: faq,
    };
}
export const createFaq = (faq) => async (dispatch) => {
    try {
        dispatch(createFaqLoading());
        const response = await apiCreateFaq(faq);
        dispatch(createFaqSuccess(response.data));
    } catch (error) {
        dispatch(createFaqError(error));
    }
};

/** UPDATE ONE FAQ */
const updateFaqLoading = () => {
    return {
        type: 'UPDATE_FAQ_LOADING'
    };
}
const updateFaqError = (error) => {
    return {
        type: 'UPDATE_FAQ_ERROR',
        payload: error,
    };
}
const updateFaqSuccess = (faq) => {
    return {
        type: 'UPDATE_FAQ_SUCCESS',
        payload: faq,
    };
}
export const updateFaq = (faq) => async (dispatch) => {
    try {
        dispatch(updateFaqLoading());
        const response = await apiUpdateFaq(faq);
        dispatch(updateFaqSuccess(response.data));
    } catch (error) {
        dispatch(updateFaqError(error));
    }
};

/** REMOVE ONE FAQ */
const removeFaqLoading = () => {
    return {
        type: 'REMOVE_FAQ_LOADING'
    };
}
const removeFaqError = (error) => {
    return {
        type: 'REMOVE_FAQ_ERROR',
        payload: error,
    };
}
const removeFaqSuccess = (faqId) => {
    return {
        type: 'REMOVE_FAQ_SUCCESS',
        payload: faqId,
    };
}
export const removeFaq = (faqId) => async (dispatch) => {
    try {
        dispatch(removeFaqLoading());
        const response = await apiRemoveFaq(faqId);
        dispatch(removeFaqSuccess(response.data.id));
    } catch (error) {
        dispatch(removeFaqError(error));
    }
};

