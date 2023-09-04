import { useEffect, useState } from "react";

import axios from "axios";
import ResultComponent from "../../components/ResultComponent/resultComponent";
import { useParams } from "react-router-dom";

export default function NextResultPage(props) {
  const [secondResults, secondAirportResult] = useState([]); //results jsx array of objects
  const [secondResultsJsx, setSecondResultjsx] = useState([]); //results jsx array of objects

  const { Orig } = useParams();

  console.log(props);

  useEffect(() => {
    const setter = async () => {
      await axios
        .post("http://localhost:3004/getResultForAlgo", {
          //   from: secondAirportFrom,
          //   to: AirportTo,
          //   date: departureDate,
        })
        .then(async (response) => {
          if (response.data.status === 200) {
            console.log("success");
            secondAirportResult(response.data[1]);
          } else if (response.data.status === 429) {
            await axios
              .get("http://localhost:3004/resultForTesting")
              .then((response) => {
                secondAirportResult(response.data);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);

  useEffect(() => {
    let secondResultsJSX = secondResults?.map((result) => {
      return (
        <ResultComponent
          resultData={result}
          secondFlightSetter={props.setter}
        />
      );
    });
    setSecondResultjsx(secondResultsJSX);
  }, [props.setter, secondResults]);

  return <>{secondResultsJsx}</>;
}
