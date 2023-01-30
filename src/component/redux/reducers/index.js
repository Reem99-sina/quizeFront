import { combineReducers } from "redux";
import {   setuserinfo, userinfoReducer } from "./Reducer";

const reducers = combineReducers({
    userinfoDate: userinfoReducer,
    databackuser:setuserinfo
})
export default reducers