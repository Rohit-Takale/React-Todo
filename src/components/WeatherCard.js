import React from "react";

function WeatherCard(props) {
  return (
    <>
      <div className=" flex items-center justify-center ">
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs border shadow-2xl">
          <div className="font-bold text-xl">{props.name}</div>
          <div className="text-sm text-gray-500">{props.date}</div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
         
            <img src={props.img} alt="" />
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-medium text-6xl">{props.celcius}°</div>
            <div className="flex flex-col items-center ml-6">
              <div className="font-medium">{props.text}</div>
            
             
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Wind</div>
              <div className="text-sm text-gray-500">{props.wind}k/h</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Humidity</div>
              <div className="text-sm text-gray-500">{props.humidity}%</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">Visibility</div>
              <div className="text-sm text-gray-500">{props.visibility}km</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
