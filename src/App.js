import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/80008-inha-somsikova"
            target="_blank"
            rel="noreferrer"
          >
            Inha Somsikova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/nezhuka/weather-react-five"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
