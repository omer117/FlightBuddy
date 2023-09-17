import ResultComponent from "../../Components/ResultComponent/resultComponent";
import { Button } from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "./lastResultPage.scss";

export default function LastResultPage(props) {
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const navi = useNavigate();
  const chosenFlights = props.data;
  console.log(JSON.parse(localStorage.getItem("user_id")));
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
          } else {
            alert("something went wrong");
          }
        });
    }
  }

  console.log(user_id);

  const chosenFlightsJSX = chosenFlights.map((flight) => {
    return <ResultComponent disabled={"disabled"} resultData={flight} />;
  });

  return (
    <div>
      <h1>Those are the flights you choosed</h1>
      {chosenFlightsJSX.length > 0 ? (
        <div className="chosenFlight">{chosenFlightsJSX}</div>
      ) : (
        <></>
      )}
      {props.user !== undefined ? (
        <div className="btnDiv">
          {user_id!==null ? 
          
          <Button onClick={clickHandler} className="SaveBtn">
            Save Here
          </Button>
          :
           <div>
          <p>you will need an account to save your flights</p>
              <Link to='/logIn'>Log In</Link>
            </div>}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
