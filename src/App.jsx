import {useState} from 'react';
import './App.css';

function App() {

  const apiDetails = {
    locationsURL: "http://dataservice.accuweather.com/locations/v1/cities/search",
    weatherURL: 'http://dataservice.accuweather.com/currentconditions/v1/',
    apiKey: "b42vl29tgDCNr4wRBBam7Cnh59EUbovA"
  }

  async function getLocation(city) {
    try {
      const url = `${apiDetails.locationsURL}?apikey=${apiDetails.apiKey}&q=${city}`;
       
      const data = await fetch(url);
    const jsonData = await data.json(); 

    return jsonData;
    } catch (err) {
      console.error(err.message)
    }
  }

  async function getWeather(location, includeDetails = false) {
    try {
      const locationDetails = await getLocation(location);
      const locationCode = locationDetails[0].Key;
      const url = `${apiDetails.weatherURL}${locationCode}?apikey=${apiDetails.apiKey}&details=${includeDetails}`

      const data = await fetch(url);
      const jsonData = await data.json();
      console.log(jsonData);  
      return jsonData;
    }
    catch(err) {
      console.error(err);
    }
  } 
   
  const [location, setLocation ] = useState('');

  const [weather, setWeather] = useState({});

  async function submission(e) {
    
      e.preventDefault();
      console.log(location)
      const data = await getWeather(location)
      setWeather(data[0]);
      
    }
  return (
    <div className="App">
      <h2 className="title">antWeather</h2>
      <form onSubmit={submission}>
        <input type="text" onChange={(e) => {
          setLocation(e.target.value);
        }} />
        <input type="submit" value="Get Weather" />
      </form>
      <h2>The weather is </h2>
      <p>{ weather ? weather.WeatherText : 'no weather atm'}</p>
    </div>
  );
}

export default App;