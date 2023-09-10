import "./ResultPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ResultComponent from "../../components/ResultComponent/resultComponent";
import airplane from "../../assets/images/airplane-travel-svgrepo-com 2.svg";

export default function ResultPage(props) {
  const { Orig } = useParams();
  const [firstResults, setFirstResults] = useState([]); //results jsx array of objects
  const [firstResultsJsx, setFirstResultsJsx] = useState([]); //results jsx array of objects

  console.log(props);
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
    OrigSetter(props.data[0], Orig);
  }, [Orig]);

  // A mapped array that returns a list of JSX objects that contain flight result data.
  useEffect(() => {
    let firstResultJSX = firstResults?.map((result) => {
      return <ResultComponent resultData={result} setter={props.setter} />;
    });
    setFirstResultsJsx(firstResultJSX);
  }, [firstResults]);

  return (
    <>
      <img src={airplane} className="airplane1" alt="airplane" />
      <div className="mainDivContainer">
        {firstResultsJsx?.length > 0 ? (
          <div>
            <h2>Step 3: Choose your flights!</h2>
            {firstResultsJsx}
            <div className="link">
              <Link className="nextLink" to={`/nextResult/${Orig}`}>
                Lets find a flight for your buddy
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <img src={airplane} className="airplane2" alt="airplane" />
    </>
  );
}
