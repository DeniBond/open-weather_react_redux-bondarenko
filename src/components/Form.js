import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getWeatherAction} from "../redux/actions/getWeatherActions";

const Form = () => {
    const [city, setCity] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <input onChange={(event)=>{
                setCity(event.target.value)
            }} type="text" placeholder={'Enter City'}/>
            <button onClick={()=>dispatch(getWeatherAction(city))}>Get Weather</button>
        </div>
    );
};

export default Form;