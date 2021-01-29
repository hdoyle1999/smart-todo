import authReducer from './authReducer';
import todoReducer from './todoReducer';
import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
    calendar: calendarReducer
})

export default rootReducer;