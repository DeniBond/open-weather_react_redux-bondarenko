import {api_key, base_url} from "../../Utils/constants";

export const SAVE_DATA_WEATHER = 'SAVE_DATA_WEATHER;'
export const GET_WEATHER_LOADING = 'GET_WEATHER_LOADING'
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';

//action for waiting weather
export const getWeatherLoadingAction = () => ({
    type: GET_WEATHER_LOADING,
    payload: 'Wait a moment...'
})

//error action
export const weatherErrorAction = (e) => ({
    type: GET_WEATHER_ERROR,
    payload: `Sorry, Your city not found, looks like an apocalypse in the world :( Happy survival :)`
})

// action for loading weather from server
export const getWeatherAction = (city) => {
    return (dispatch) =>{
        dispatch(getWeatherLoadingAction())
        fetch(`${base_url}weather?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.message === 'city not found'){
                    dispatch(weatherErrorAction())
                }
                dispatch(saveDataWeatherAction(data))
            })
            .catch(e=> dispatch(weatherErrorAction(e)))
    }
}

export const saveDataWeatherAction = (data) =>({
    type:SAVE_DATA_WEATHER,
    payload: data
})