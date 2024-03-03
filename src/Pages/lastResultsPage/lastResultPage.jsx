import ResultComponent from "../../Components/ResultComponent/resultComponent";
import { Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./lastResultPage.scss";

export default function LastResultPage(props) {
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const navi = useNavigate();
  const chosenFlights = props.data;

  let flightsData = {
    fromWhereFirst: chosenFlights[0].dep_code,
    whereToFirst: chosenFlights[0].arr_code,
    date: localStorage.getItem("skyScannerDate"),
    fromWhereSecond: chosenFlights[1].dep_code,
    whereToSecond: chosenFlights[1].arr_code,
  };

  if (flightsData.date.length === 5) {
    flightsData.date = flightsData.date.split("");
    flightsData.date.splice(2, 0, "0");
    flightsData.date = flightsData.date.join("");
  }

  let FirstSkyScannerLink = `https://www.skyscanner.co.il/transport/flights/${flightsData.fromWhereFirst}/${flightsData.whereToFirst}/${flightsData.date}/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0`;
  let SecondSkyScannerLink = `https://www.skyscanner.co.il/transport/flights/${flightsData.fromWhereSecond}/${flightsData.whereToSecond}/${flightsData.date}/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0`;

  function clickHandler() {
    for (let i = 0; i < 2; i++) {
      chosenFlights[i].user_id = JSON.parse(localStorage.getItem("user_id"));
      axios
        .post("https://flightbuddyserver.onrender.com/flightsAPI/addFlights", {
          flight: chosenFlights[i],
        })
        .then((response) => {
          if (response.status === 200) {
            console.log("we successfully added your flights");
            navi("/myFlights");
          } else {
            alert("something went wrong");
          }
        });
    }
  }

  const chosenFlightsJSX = chosenFlights.map((flight) => {
    return <ResultComponent disabled={"disabled"} resultData={flight} />;
  });

  return (
    <div className="containerDiv">
      <h1>Those are the flights you choosed</h1>
      {chosenFlightsJSX.length > 0 ? (
        <div className="chosenFlight">
          {chosenFlightsJSX}
          <h2>These links will take you to skyScanner!</h2>
          <div className="skyScannerLinks">
            <Link underline="hover" target="_blank" href={FirstSkyScannerLink}>
              {flightsData.fromWhereFirst + " To " + flightsData.whereToFirst}
            </Link>
            <Link underline="hover" target="_blank" href={SecondSkyScannerLink}>
              {flightsData.fromWhereSecond + " To " + flightsData.whereToSecond}
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
      {props.user !== undefined ? (
        <div className="btnDiv">
          {user_id !== null ? (
            <Button
              onClick={clickHandler}
              variant="contained"
              className="SaveBtn"
            >
              Save Here
            </Button>
          ) : (
            <div>
              <p>you will need an account to save your flights</p>
              <Button
                onClick={() => {
                  navi("/");
                }}
              >
                Log In
              </Button>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
