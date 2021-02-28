import React, { useState } from "react";
import "./Country.css";

const Country = (props) => {
  const country = props.country;
  const { name, flag, capital } = country;
  const [isActive, setActive] = useState(false);
  const [isSelect, setSelect] = useState("Select");
  const handleActive = () => {
    if (!isActive) {
      setActive(true);
      setSelect("DeSelect");
    } else {
      setActive(false);
      setSelect("Select");
    }
  };
  return (
    <div className={"country-box " + (isActive ? "active" : "")}>
      <img src={flag} alt="" height="30px" />
      <h3>{name}</h3>
      <p>{capital}</p>
      <button
        onClick={() => {
          props.handleChoose(country);
          handleActive();
        }}
      >
        {isSelect}
      </button>
    </div>
  );
};

export default Country;
