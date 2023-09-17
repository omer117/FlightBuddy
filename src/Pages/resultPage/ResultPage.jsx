import "./ResultPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ResultComponent from "../../Components/ResultComponent/resultComponent";

export default function ResultPage(props) {
  const { Orig } = useParams();
  const [selectedElementIndex, setSelectedElementIndex] = useState(null); // Add state to track selected element
  const [firstResults, setFirstResults] = useState([]); //results jsx array of objects
  const [firstResultsJsx, setFirstResultsJsx] = useState([]); //results jsx array of objects


  //!!  This is a function that get result of prices from the API
  
  useEffect(() => {
    async function OrigSetter(from, to) {
      axios
        .post("https://flightbuddyserver.onrender.com/flightsAPI/getChosenAirportsFlights", {
          airportFrom: from,
          airportTarget: to,
        })
        .then((response) => {
          setFirstResults(response.data);
        });
    }
    OrigSetter(localStorage.getItem("firstFlight"), Orig); //to be erased before prod
    // OrigSetter(props.data[0], Orig);
  }, [Orig]);

  // A mapped array that returns a list of JSX objects that contain flight result data.
  useEffect(() => {
    let firstResultJSX = firstResults?.map((result, index) => {
      return (
        <ResultComponent
          key={index}
          idScssData={
            selectedElementIndex === "index" ? "active selected" : "active"
          }
          onClickFunc={setSelectedElementIndex(index)}
          classData={"active"}
          resultData={result}
          setter={props.setter1}
        />
      );
    });
    setFirstResultsJsx(firstResultJSX);
  }, [firstResults]);


  return (
    <>
      <div className="mainDivContainer">
        {firstResultsJsx?.length > 0 ? (
          <div>
            <h2>Step 3: Choose your flight!</h2>
            <div className="SubContainer">
              <div className="List">{firstResultsJsx}</div>
            </div>
            <div id="nextLink">
              <Link className="nextLink" to={`/nextFlight/${Orig}`}>
                Let's find your buddy a flight
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
