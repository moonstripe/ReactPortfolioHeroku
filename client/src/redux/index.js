import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import custom reducers
// import {
//     viewerReducer,
//     loginReducer
// } from '../pages';

//export pairs
export default combineReducers({
    form: formReducer,
});
