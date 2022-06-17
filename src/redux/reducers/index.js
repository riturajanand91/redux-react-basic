import { combineReducers } from 'redux';
import usersReducer from './userReducer';

export default combineReducers({
    // key name users will show up in our state
    // users: usersReducer,
    users: usersReducer
});