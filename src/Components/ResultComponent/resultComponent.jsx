import './resultComponent.scss';

export default function ResultComponent(props){

    return (
        <div className="field">
          <div className="mainResultDiv">
            <div className="infoDiv">
              <div className="arrivalInfo">
                <div className="arrivalLocation">
                  <h2 className="airportHeader">
                    {props.resultData.arrivalAirport.code}-{props.resultData.arrivalAirport.city}
                  </h2>
                  <p className="airportName">{props.resultData.arrivalAirport.label}</p>
                  <p className="airportCountry">
                    {props.resultData.arrivalAirport.country.label}
                  </p>
                  <p className="timeOfDepartureDate">22-09-2023</p>
                  <p className="timeOfDeparture">11:00</p>
                </div>
              </div>
              <div className="midInfoDiv">
                <div className="Duration">{props.resultData.duration.text}</div>
                <div className="flightCodes">{props.resultData.path[0]}</div>
                <div className="illustrate"></div>
                <div className="stopsInfo">
                  <p>
                    {props.resultData.stops}-{props.resultData.stopSummary.stopDuration}
                  </p>
                  <p>
                    {props.resultData.stopSummary.airport}
                    "add here the city of the airport after it"
                  </p>
                </div>
              </div>
              <div className="departureInfo">
                <div className="departureLocation">
                  <h2 className="airportHeader">
                    {props.resultData.departureAirport.code}-{props.resultData.departureAirport.city}
                  </h2>
                  <p className="airportName">{props.resultData.departureAirport.label}</p>
                  <p className="airportCountry">
                    {props.resultData.departureAirport.country.label}
                  </p>
                  <p className="timeOfDepartureDate">22-09-2023</p>
                  <p className="timeOfDeparture">11:00</p>
                </div>
              </div>
            </div>
        </div>
            <div className="pricingDiv">
              <div className="header">
                <div>{props.resultData.flight_name}</div>
              </div>
              <div className="priceDiv">
                {props.resultData.totals.total} {props.resultData.currency}
              </div>
            </div>
          </div>
      );
}