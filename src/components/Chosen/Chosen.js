import React from "react";

const Chosen = (props) => {
  const chosenCountries = props.chosenCountries;
  let totalPopulation = 0;

  for (let i = 0; i < chosenCountries.length; i++) {
    const country = chosenCountries[i];
    let population = country.population;
    totalPopulation = totalPopulation + population;
  }

  return (
    <div>
      <h2>Selected Countries: {chosenCountries.length}</h2>
      <h4>Total Population: {totalPopulation}</h4>
    </div>
  );
};

export default Chosen;
