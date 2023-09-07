import { Button } from "@mui/material";
import "./resultComponent.scss";
import { Navigate } from "react-router-dom";

export default function ResultComponent(props) {
  function clickHandler() {
    props.setter(props.resultData);
  }

  return (
    <div onClick={clickHandler} className="field">
      <div className="mainResultDiv">
        <div className="infoDiv">
          <div className="arrivalInfo">
            <div className="arrivalLocation">
              <h2 className="airportHeader">
                {props.resultData.arr_code}-{props.resultData.arr_airport_name}
              </h2>
              <p className="airportCountry">{props.resultData.arr_country}</p>
              <p className="timeOfDepartureDate">{props.resultData.arr_time}</p>
              <p className="timeOfDeparture">{props.resultData.arr_hour}</p>
            </div>
          </div>
          <div className="midInfoDiv">
            <div className="Duration">{props.resultData.duration_hours}</div>
            <div className="flightCodes">{props.resultData.flight_number}</div>
          </div>
          <div className="departureInfo">
            <div className="departureLocation">
              <h2 className="airportHeader">
                {props.resultData.arr_code}-{props.resultData.dep_airport_name}
              </h2>
              <p className="airportCountry">{props.resultData.dep_country}</p>
              <p className="timeOfDepartureDate">{props.resultData.dep_time}</p>
              <p className="timeOfDeparture">{props.resultData.dep_hour}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
