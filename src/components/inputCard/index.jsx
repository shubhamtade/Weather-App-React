import React, { useState } from "react";

const InputCard = ({ setCity }) => {
  const [cityName, setCityName] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setCity(cityName);
    // console.log("Form submitted with city:", cityName);
  };

  return (
    <div className="text-center">
      <form
        onSubmit={submitForm}
        className="flex sm:flex-row flex-col  justify-center"
      >
        <input
          className="text-black sm:w-[50%] sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none p-3 outline-none"
          type="city"
          name="city"
          placeholder="Enter you city"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          type="submit"
          className="sm:w-[20%] py-2 bg-green-400 sm:rounded-r-lg rounded-b-lg sm:rounded-bl-none hover:bg-green-600 duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputCard;
