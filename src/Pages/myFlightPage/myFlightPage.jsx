import { useState } from "react";
import axios from "axios";
import ResultComponent from "../../components/ResultComponent/resultComponent";

export default function MyFlightPage(props) {
  const [userFlights, setUserFlights] = useState([]);

  console.log(JSON.parse(localStorage.getItem("user_id")));

  useState(() => {
    function setter() {
      axios
        .post("https://flightbuddyserver.onrender.com/AuthAPI/findUserFlightById", {
          user_id: `${JSON.parse(localStorage.getItem("user_id"))}`,
        })
        .then((response) => {
          setUserFlights(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setter();
  }, []);

  const chosenFlightsJSX = userFlights.map((flight) => {
    return <ResultComponent classData={"disabled"} resultData={flight} />;
  });

  return (
    <div>
      {chosenFlightsJSX !== undefined ? (
        <div>
          <h1>The flights you choosed:</h1>
          {chosenFlightsJSX}
        </div>
      ) : (
        <h1>you did not choosed flights yet!</h1>
      )}
    </div>
  );
}
