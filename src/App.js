import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>
        <Search />
      </h2>
      <p>
        This project was coded by Saiudja and is
        <a href="https://github.com/saiudja/weather-react">
          open-sourced on GitHub
        </a>
        and
        <a href="https://hilarious-sopapillas-3f76f5.netlify.app/">
          hosted on Netlify
        </a>
        <a></a>
      </p>
    </div>
  );
}
