import './App.css';
import CountryWeather from './components/CountryWeather';
import "weather-icons/css/weather-icons.css";
import CountryList from './components/CountryList';


function App() {
  return (
    <div className="App">
     <CountryWeather />
     <CountryList/>
    </div>
  );
}

export default App;
