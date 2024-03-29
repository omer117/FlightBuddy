import "./myFlightPage.scss";
import axios from "axios";
import ResultComponent from "../../Components/ResultComponent/resultComponent";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MyFlightPage(props) {
  const [userFlights, setUserFlights] = useState([]);

  console.log(JSON.parse(localStorage.getItem("user_id")));
  useState(() => {
    function setter() {
      axios
        .post(
          "https://flightbuddyserver.onrender.com/flightsAPI/findFlightById",
          {
            user_id: `${JSON.parse(localStorage.getItem("user_id"))}`,
          }
        )
        .then((response) => {
          setUserFlights(response.data);
        })
        .catch((error) => {
         alert(error);
        });
    }
    setter();
  }, []);

  const chosenFlightsJSX = userFlights?.map((flight) => {
    return <ResultComponent classData={"disabled"} resultData={flight} />;
  });

  return (
    <div className="myFlightsPage">
      <div className="containerDiv">
        <div className="mainDivContainer">
          {chosenFlightsJSX.length !== 0 ? (
            <div>
              <h1>The flights you choosed:</h1>
              <div className="SubContainer">
                <div className="List">{chosenFlightsJSX}</div>
              </div>
            </div>
          ) : (
            <div>
              <div className="didNotBookedYet">
                <h1>you did not choosed flights yet!</h1>
                <Link to="/Search">choose now !</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
