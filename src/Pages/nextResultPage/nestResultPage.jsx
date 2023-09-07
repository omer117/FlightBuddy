import { useEffect, useState } from "react";
import axios from "axios";
import ResultComponent from "../../components/ResultComponent/resultComponent";
import { useParams,Link } from "react-router-dom";

export default function NextResultPage(props) {
  const [secondResults, secondAirportResult] = useState([]); //results jsx array of objects
  const [secondResultsJsx, setSecondResultjsx] = useState([]); //results jsx array of objects

  const { Orig } = useParams();

  console.log(props);

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
    OrigSetter(props.data[1], Orig);
  }, [Orig]);

  useEffect(() => {
    let secondResultsJSX = secondResults?.map((result) => {
      return (
        <ResultComponent
          resultData={result}
          setter={props.setter}
        />
      );
    });
    setSecondResultjsx(secondResultsJSX);
  }, [props.setter, secondResults]);

  return (
    <>
      <div>{secondResultsJsx}
      </div>
      <div><Link to={'/lastResult'}>Let's sum it up </Link></div>
    </>
  );
}
