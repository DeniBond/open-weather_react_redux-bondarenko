import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import weatherReducer from "../reducers/weatherReducer";
import thunk from "redux-thunk";

const initialState = {
    weather: {},
}

export const store = createStore(weatherReducer, initialState, applyMiddleware(logger, thunk))