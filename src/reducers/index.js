import { combineReducers } from 'redux';

import counterReducer from './counter';
import lightReducer from './light';
import faqReducer from './faq';
import questionReducer from './question';

const rootReducer = combineReducers({
    counter: counterReducer,
    light: lightReducer,
    faqs: faqReducer,
    questions: questionReducer,
});

export default rootReducer;