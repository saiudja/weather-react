import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>
          <Search defaultCity="Kyiv" />
        </h2>
        <p>
          This project was coded by Saiudja and is{" "}
          <a href="https://github.com/saiudja/weather-react" target={"_blank"}>
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://hilarious-sopapillas-3f76f5.netlify.app/"
            target={"_blank"}
          >
            hosted on Netlify
          </a>
          <a></a>
        </p>
      </div>
    </div>
  );
}
