import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import WeatherCard from "../components/WeatherCard";
import not_found from "../Images/not_found.gif"

function Weather() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState(null); // Initialize state for error

  useEffect(() => {
    fetchData();
    // document.title = `Weather`;
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=d7febcea1f2c423fa09120846240604&q=india&aqi=no`
      );
      if (!response.ok) {
        const errorMessage =
          response.status === 400 ? "Location Not Found" : "An error occurred";
        throw new Error(errorMessage);
        console.log(response.status);
      }
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
      setData(null);
    }
  };

  const nameChange = async (e) => {
    setName(e.target.value);
  };

  const getWeather = async () => {
    if (name.length < 3) {
      setError("Please enter a more specific location.");
      setData(null); // Ensure no stale data is displayed
      return;
    }
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=d7febcea1f2c423fa09120846240604&q=${name}&aqi=no`
      );
      if (!response.ok) {
        const errorMessage =
          response.status === 400 ? "Location Not Found" : "An error occurred";
        throw new Error(errorMessage);
        console.log(response.status);
      }
      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
      setData(null);
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:w-1/2 sm:w-full p-10 justify-center items-center">
        <div>
          <label>Enter Location</label>
          <Input type="text" name={name} value={name} onChange={nameChange} />
        </div>
        <div>
          <Button title="Get Weather" onClick={getWeather} />
        </div>
      </div>

      <div>
        {data ? (
          <WeatherCard
            name={data.location.name}
            celcius={data.current.temp_c}
            humidity={data.current.humidity}
            wind={data.current.wind_kph}
            date={data.location.localtime}
            visibility={data.current.vis_km}
            text={data.current.condition.text}
            img={data.current.condition.icon}
          />
        ) : error ? (
          <div className="text-center">
            <p className="text-center font-medium text-2xl">{error}</p>
            <center> <img src={not_found} alt="" /></center>
           
          </div>
        ) : (
          <p className="text-center">No Internet Connection</p>
        )}
      </div>
      {/* Here goes the comment */}
    </>
  );
}

export default Weather;
