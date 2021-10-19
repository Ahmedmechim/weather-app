import React from "react";
import { useDispatch } from "react-redux";
import { deleteOne } from "../redux/ActionTypes";

const Country = ({ country }) => {
    const dispatch = useDispatch()
  return (
    <div className="country">
      <h1 className="name"><span>{country.name}</span>,  <span>{country.id}</span></h1>
      <h2 className="icon">
        <i className={country.weatherIcon}></i>{" "}
      </h2>
      <h2>{country.temp}°</h2>
      <h3>
        <span>min: {country.temp_min}°</span>{" "}
        <span>max: {country.temp_max}°</span>
      </h3>
      <h3>{country.description}</h3>
      <button onClick={()=>dispatch(deleteOne(country.name))} >remove</button>
    </div>
  );
};

export default Country;
