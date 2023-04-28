import {GET_WEATHER_ERROR, GET_WEATHER_LOADING, SAVE_DATA_WEATHER} from "../actions/getWeatherActions";

function weatherReducer(state, action) {
    switch (action.type){
        case SAVE_DATA_WEATHER :
            return {...state, weather: action.payload};
        case GET_WEATHER_ERROR  :
            return {...state, textInfo: action.payload};
        case GET_WEATHER_LOADING :
            return {...state, textInfo: action.payload}
        default:
            return state
    }
}

export default weatherReducer