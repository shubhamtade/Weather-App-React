import React, { useState, useEffect } from "react";
import InputCard from "./components/inputCard/index";
import OutputCard from "./components/outputCard";

const App = () => {
  // https://api.openweathermap.org/data/2.5/weather?q=London&appid=53ae74e992cf5d115dadab5170a3db90
  const [bgUrl, setBgUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
  );
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53ae74e992cf5d115dadab5170a3db90`
    )
      .then((res) => res.json())
      .then((data) => {
        setCityData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <div className="  text-white p-3 text-center flex flex-col justify-evenly h-screen w-screen bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700">
      <h1 className=" text-[32px] font-bold">Weather App</h1>
      <InputCard setCity={setCity} />
      <OutputCard className="flex-1" setBgUrl={setBgUrl} cityData={cityData} />
    </div>
  );
};

export default App;
