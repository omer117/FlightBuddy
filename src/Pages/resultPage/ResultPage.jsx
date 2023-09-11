import "./ResultPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ResultComponent from "../../components/ResultComponent/resultComponent";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function ResultPage(props) {
  const { Orig } = useParams();
  const [firstResults, setFirstResults] = useState([]); //results jsx array of objects
  const [firstResultsJsx, setFirstResultsJsx] = useState([]); //results jsx array of objects
  const [secondResults, secondAirportResult] = useState([]); //results jsx array of objects
  const [secondResultsJsx, setSecondResultjsx] = useState([]); //results jsx array of objects
  const [selectedElementIndex, setSelectedElementIndex] = useState(null); // Add state to track selected element

  //!!  This is a function that get result of prices from the API
  useEffect(() => {
    async function OrigSetter(from, to) {
      axios
        .post("http://localhost:3004/flightsAPI/getChosenAirportsFlights", {
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

  useEffect(() => {
    async function OrigSetter(from, to) {
      axios
        .post("http://localhost:3004/flightsAPI/getChosenAirportsFlights", {
          airportFrom: from,
          airportTarget: to,
        })
        .then((response) => {
          secondAirportResult(response.data);
        });
    }
    OrigSetter(localStorage.getItem("secondFlight"), Orig); // to be erased before prod
    // OrigSetter(props.data[1], Orig);
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

  useEffect(() => {
    let secondResultsJSX = secondResults?.map((result, index) => {
      return (
        <ResultComponent
          key={index}
          idScssData={
            selectedElementIndex === "index" ? "active selected" : "active"
          }
          onClick={() => {
            setSelectedElementIndex(index);
          }}
          classData={"active"}
          resultData={result}
          setter={props.setter2}
        />
      );
    });
    setSecondResultjsx(secondResultsJSX);
  }, [props.setter, props.setter2, secondResults, selectedElementIndex]);

  return (
    <>
      <div className="mainDivContainer">
        {firstResultsJsx?.length > 0 ? (
          <div>
            <h2>Step 3: Choose your flights!</h2>
            <div className="SubContainer">
              <div className="List">{firstResultsJsx}</div>
              <div className="List">{secondResultsJsx}</div>
            </div>
            <div id="nextLink">
              <Link className="nextLink" to={`/lastResult`}>
                Let's sum it up
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
