import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

function Weather() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState(null); // Initialize state for error

  useEffect(() => {
    fetchData();
    // document.title = `Weather`;
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=d7febcea1f2c423fa09120846240604&q=india&aqi=yes"
    );
    const result = await response.json();
    setData(result);
  };

  const nameChange = async (e) => {
    setName(e.target.value);
  };

  const getWeather = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=d7febcea1f2c423fa09120846240604&q=${name}&aqi=yes`
      );
      if (!response.ok) {
        throw new Error("Location Not Found");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-5 p-10">
        <div>
          <label>Enter Location</label>
          <Input type="text" name={name} value={name} onChange={nameChange} />
        </div>
        <div></div>
        <div>
          <Button title="Get Weather" onClick={getWeather} />
        </div>
      </div>
      <div className="justify-center p-10">
        {/* {data ? (
          <div>
            <Card
              title={data.location.name}
              src={data.current.condition.icon}
            />
            <p>Tempreture: {data.current.feelslike_c}℃</p>
          </div>
        ) : (
          <p>loading....</p>
        )} */}

        {  data ? (
          <div>
            <Card
              title={data.location.name}
              src={data.current.condition.icon}
            />
            <p>Tempreture: {data.current.feelslike_c}℃</p>
          </div>
        ) : error ? (<p>Error: {error}</p>) : (
          <p>loading....</p>
        )}
      </div>
    </>
  );
}

export default Weather;
