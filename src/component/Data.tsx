import React, {useState} from 'react';
import {api_key, base_url} from "../units/constants";
import Form from "./Form";
import Weather from "./Weather";

interface WeatherInfo {
    temp: number | null,
    city: string | null,
    country: string | null,
    pressure: number | null,
    sunset: Date | null,
    message: string | null
}

interface City {
    city: string
}

const Data = () => {

    const [weatherInfo, setWeatherInfo] = useState({
            temp: null,
            city: null,
            country: null,
            pressure: null,
            sunset: null,
            message: 'Enter city name'
    })

    const getWeatherInfo = async (city: string) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            setWeatherInfo({
                city: null, country: null, message: "", pressure: null, sunset: null, temp: null,
                weatherInfo: {
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset,
                    message: null
                }
            })
        } catch (e) {
            setWeatherInfo({
                weatherInfo: {
                    message: 'Enter correct city name'
                }
            })
        }
    }

        return (
            <div>
                <Form getWeatherInfo={getWeatherInfo} />
                <Weather info={weatherInfo} />
            </div>
        )

}

export default Data;