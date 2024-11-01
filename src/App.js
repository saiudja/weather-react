import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>
          <Weather defaultCity="Kyiv" />
        </h2>
        <p>
          This project was coded by Saiudja and is{" "}
          <a
            href="https://github.com/saiudja/weather-react"
            target={"_blank"}
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-react-sai.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
