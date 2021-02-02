import authReducer from './authReducer';
import todoReducer from './todoReducer';
import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
    calendar: calendarReducer,
    firestore: firestoreReducer
})


export default rootReducer;