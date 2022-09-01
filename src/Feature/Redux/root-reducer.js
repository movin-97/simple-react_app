import { combineReducers } from "redux";
import StudentReducer from './reducer';

const RootReducer  = combineReducers({
    student : StudentReducer
})

export default RootReducer