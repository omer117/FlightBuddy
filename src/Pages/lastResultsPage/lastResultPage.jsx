import ResultComponent from "../../Components/ResultComponent/resultComponent";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./lastResultPage.scss";
import { useState } from "react";

export default function LastResultPage(props) {
  const [date, setDate] = useState();
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const navi = useNavigate();
  const chosenFlights = props.data;


  console.log(date);
  useState(() => {
    let day = Number(localStorage.getItem("date").slice(0, 1));
    let month = Number(localStorage.getItem("date").slice(2, 3));
    let year=  (localStorage.getItem("date").slice(6, 8));
    if (day < 10 || month < 10 ) {
      day = `0${day}`;
      month = `0${month}`;
    }
let newDate =year+month+day
setDate(newDate)
  }, []);

  let flightsData = {
    fromWhereFirst: chosenFlights[0].dep_code,
    whereToFirst: chosenFlights[0].arr_code,
    date:
      chosenFlights[0].dep_time.slice(2, 4) +
      chosenFlights[0].dep_time.slice(5, 7) +
      chosenFlights[0].dep_time.slice(8, 10),
    fromWhereSecond: chosenFlights[1].dep_code,
    whereToSecond: chosenFlights[1].arr_code,
  };

  let FirstSkyScannerLink = `https://www.skyscanner.co.il/transport/flights/${flightsData.fromWhereFirst}/${flightsData.whereToFirst}/${date}/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0`;
  let SecondSkyScannerLink = `https://www.skyscanner.co.il/transport/flights/${flightsData.fromWhereSecond}/${flightsData.whereToSecond}/${date}/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0`;
  console.log(FirstSkyScannerLink);
  console.log(SecondSkyScannerLink);

  function clickHandler(props) {
    for (let i = 0; i < 2; i++) {
      chosenFlights[i].user_id = JSON.parse(localStorage.getItem("user_id"));
      axios
        .post("http://localhost:3004/AuthAPI/addFlights", {
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
        <div className="chosenFlight">{chosenFlightsJSX}</div>
      ) : (
        <></>
      )}
      {props.user !== undefined ? (
        <div className="btnDiv">
          {user_id !== null ? (
            <Button onClick={clickHandler} className="SaveBtn">
              Save Here
            </Button>
          ) : (
            <div>
              <p>you will need an account to save your flights</p>
              <Button
                onClick={() => {
                  navi("/");
                }}
                variant="contained"
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
