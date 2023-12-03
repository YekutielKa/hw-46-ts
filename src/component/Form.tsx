import React, {useState} from 'react';

const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
}
const Form = ({getWeatherInfo}) => {
        const [city, setCity] = useState('')

    const handleClick = () => {
        getWeatherInfo(city);
        setCity('' );
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

        return (
            <div>
                <input
                    onChange={handleChange}
                    type='text'
                    placeholder='City'
                    value={city}
                />
                <button onClick={handleClick}>Get weather</button>
            </div>
        )
}

export default Form;