import "./ResultPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultComponent from "../../components/ResultComponent/resultComponent";
import airplane from '../../assets/images/airplane-travel-svgrepo-com 2.svg'
import { Button } from "@mui/material";

export default function ResultPage(props) {
  const { Orig } = useParams();
  const [firstResults, setFirstResults] = useState([]); //results jsx array of objects
  const [secondResults, secondAirportResult] = useState([]); //results jsx array of objects
  const [firstResultsJsx, setFirstResultsJsx] = useState([]); //results jsx array of objects
  const [secondResultsJsx, setSecondResultjsx] = useState([]); //results jsx array of objects
  const [firstChosenAirportsDataList, setFirstChosenFlightDataList] = useState(
    {}
  );
  const [secondChosenAirportsDataList, setSecondChosenFlightDataList] =
    useState({});

  //!!  This is a function that get result of prices from the API
  useEffect(() => {
    console.log("object");
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
        .then((response) => {
          setFirstResults(response.data);
        })
        .then(
          axios
            .post("http://localhost:3004/getResultForAlgo", {
              from: secondAirportFrom,
              to: AirportTo,
              date: departureDate,
            })
            .then((response) => {
              secondAirportResult(response.data);
            })
            .catch((err) => {
              console.log(err);
            })
        );
    }
    OrigSetter(props.data[0], props.data[1], Orig, props.data[2]);
  }, []);

  // console.log(firstResults);
  console.log(secondResults);

  // A mapped array that returns a list of JSX objects that contain flight result data.
  useEffect(() => {
    let firstResultJSX = firstResults?.map((result) => {
      return (
        <ResultComponent
          resultData={result}
          firstFlightSetter={setFirstChosenFlightDataList}
        />
      );
    });
    setFirstResultsJsx(firstResultJSX);
  }, [firstResults]);

  useEffect(() => {
    let secondResultsJSX = secondResults?.map((result) => {
      return (
        <ResultComponent
          resultData={result}
          secondFlightSetter={setSecondChosenFlightDataList}
        />
      );
    });
    setSecondResultjsx(secondResultsJSX);
  }, [secondResults]);

  return (
    <>
      <img src={airplane} className="airplane1" alt="airplane" />
      <div className="mainDivContainer">
        {firstResultsJsx?.length > 0 ? 
        <div>
          <h2>Thats what we found for you</h2>
          {firstResultsJsx}
          <Button>Lets find a flight for your buddy</Button>
          </div> : <></>}
        {setFirstChosenFlightDataList !== undefined ? secondResultsJsx : <></>}
      </div>
      <img src={airplane} className="airplane2" alt="airplane" />
    </>
  );
}
