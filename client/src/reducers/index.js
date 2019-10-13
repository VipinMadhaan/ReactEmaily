import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducers from './authReducers';
import surveysReducer from "./surveysReducer";

export default combineReducers({
    auth: authReducers,
    form: reduxForm,
    surveys: surveysReducer
});