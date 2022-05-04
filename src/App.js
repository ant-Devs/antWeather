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

  async function getWeather(locationCode, includeDetails = false) {
    try {
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

  const getting = async ( ) => {
    getLocation('accra').then(locationDetails => {
      console.log(locationDetails)
      getWeather(locationDetails[0].Key)
    })
  }
  
  getting();
  return (
    <div className="App">
      
    </div>
  );
}

export default App;