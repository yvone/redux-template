import { axios } from '../utils/axios';

/** Get all faqs */
export function apiGetFaqs() {
    return axios.get(`/questions`);
}

/** Create one faq */
export function apiCreateFaq(payload) {
    return axios.post(`/questions`, payload);
}

/** Update one faq */
export function apiUpdateFaq(payload) {
    return axios.put(`/questions/${payload.id}`, payload);
}

/** Delete one faq */
export function apiRemoveFaq(faqId) {
    return axios.delete(`/questions/${faqId}`);
}