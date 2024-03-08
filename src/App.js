import React from 'react';
import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity={"New York"} />
        <footer>
          <p>This project was coded by <a href='https://www.linkedin.com/in/halyna-bondar-a5854b261/' rel="noopener">Halyna Bondar</a> and is{" "}
            <a href='https://github.com/halynabondar/Weather_app_react' rel="noopener">open-sourced on GitHub</a> and <a href='' rel="noopener">hosted on Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
