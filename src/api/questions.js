import { axios } from '../utils/axios';

/** Get all questions */
export function getQuestions() {
    return axios.get(`/questions`);
}

/** Save questions */
export function saveQuestions(payload) {
    return axios.put(`/questions/create-or-replace`, payload);
}