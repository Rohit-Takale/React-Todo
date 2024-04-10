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
      <div className="grid  justify-items-center items-center sm:p-4">
        <div>
          {data ? (
            <Card
              title={data.location.name}
              src={data.current.condition.icon}
              descr={`Tempreture: ${data.current.temp_c}`}
            />
          ) : (
            <p>{error}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
