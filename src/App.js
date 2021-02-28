import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Chosen from "./components/Chosen/Chosen";
import CountryShow from "./components/CountryShow/CountryShow";

function App() {
  const [countries, setCountries] = useState([]);
  const [chosenCountries, setChosenCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChoose = (country) => {
    let item = chosenCountries.indexOf(country);
    if (item === -1) {
      const newList = [...chosenCountries, country];
      setChosenCountries(newList);
      console.log("added", newList);
    } else {
      const newList = chosenCountries.filter((c) => c !== country);
      setChosenCountries(newList);
      console.log("removed", newList);
    }
  };

  const countryWrapper = { display: "flex", justifyContent: "center", flexWrap: "wrap" };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Total Country: {countries.length}</h1>
        <Chosen chosenCountries={chosenCountries}></Chosen>
        <CountryShow></CountryShow>
        <div style={countryWrapper}>
          {countries.map((country) => (
            <Country country={country} handleChoose={handleChoose} key={country.alpha3Code}></Country>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
