import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState(
        {
            city: "DELhi",
            feelsLike:24.84,
            temp:25,
            tempMin:20,
            tempMax:27,
            humidity:47,
            weather:"haze",
        }
    );

    let updateInfo= (newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <div>Weather App by sam</div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}