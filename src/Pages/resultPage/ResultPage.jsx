import "./ResultPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultComponent from "../../components/ResultComponent/resultComponent";
import airplane from "../../assets/images/airplane-travel-svgrepo-com 2.svg";
import { Button } from "@mui/material";

export default function ResultPage(props) {
  const { Orig } = useParams();
  const [firstResults, setFirstResults] = useState([]); //results jsx array of objects
  const [firstResultsJsx, setFirstResultsJsx] = useState([]); //results jsx array of objects
 

  //!!  This is a function that get result of prices from the API
  useEffect(() => {
    async function OrigSetter(
      firstAirportFrom,
      secondAirportFrom,
      AirportTo,
      departureDate
    ) {
      axios
        .post("http://localhost:3004/getResultForAlgo", {
          from: firstAirportFrom,
          to: AirportTo,
          date: departureDate,
        })
        .then(async (response) => {
          console.log(response);
          if (response.data.status === 200) {
            console.log("success");
            setFirstResults(response.data[1]);
          } else if (response.data.status === 429) {
            await axios
              .get("http://localhost:3004/resultForTesting")
              .then((response) => {
                setFirstResults(response.data);
              });
          }
        })          
    }
    OrigSetter(props.data[0], props.data[1], Orig, props.data[2]);
  }, []);

  // A mapped array that returns a list of JSX objects that contain flight result data.
  useEffect(() => {
    let firstResultJSX = firstResults?.map((result) => {
      return (
        <ResultComponent
          resultData={result}
          firstFlightSetter={props.setter}
        />
      );
    });
    setFirstResultsJsx(firstResultJSX);
  }, [firstResults]);


  return (
    <>
      <img src={airplane} className="airplane1" alt="airplane" />
      <div className="mainDivContainer">
        {firstResultsJsx?.length > 0 ? (
          <div>
            <h2>Thats what we found for you</h2>
            {firstResultsJsx}
            <Button>Lets find a flight for your buddy</Button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <img src={airplane} className="airplane2" alt="airplane" />
    </>
  );
}
