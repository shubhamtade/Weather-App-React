import React from "react";

const OutputCard = ({ setBgUrl, cityData }) => {
  const handleClick = () => {
    setBgUrl(
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    );
  };

  // Check if cityData and cityData.weather are defined
  const cityName = cityData?.name || "Unknown City";
  const temp = cityData?.main?.temp || "Unknown Temp";
  const humidity = cityData?.main?.humidity || "Unknown Humidity";
  const wind = cityData?.wind?.speed || "Unknown Speed";

  return (
    <div className="sm:w-[70%] w-[100%] bg-black bg-opacity-25 mt-5 h-auto mx-auto shadow-md rounded-lg overflow-hidden ">
      {/* Content below the image */}
      <div className="p-6 text-white ">
        <div className="sm:flex sm:justify-around">
          <h2 className="text-2xl font-bold mb-4 ">City : {cityName}</h2>
          <p className="text-2xl font-bold mb-4 ">
            Temp : {Math.round(temp - 273.15)} °C
          </p>
        </div>
        <div className="sm:flex sm:justify-around">
          <p className="text-2xl font-bold mb-4 ">Humidity : {humidity}%</p>
          <p className="text-2xl font-bold mb-4 ">Wind : {wind} km/h</p>
        </div>
        <div className="flex justify-between text-2 font-thin sm:w-[200px]">
          <p>Long. : {cityData?.coord?.lon}</p>
          <p>Lati. : {cityData?.coord?.lat}</p>
        </div>
      </div>
    </div>
  );
};

export default OutputCard;
