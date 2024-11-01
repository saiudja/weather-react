import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToForenheit(event) {
    event.preventDefault();
    setUnit("forenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToForenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let forenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(forenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C |{" "}
          </a>
          °F
        </span>
      </div>
    );
  }
}
