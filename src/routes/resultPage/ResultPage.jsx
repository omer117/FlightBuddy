import "./ResultPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultComponent from "../../components/ResultComponent/resultComponent";
import airplane from "../../images/airplane-travel-svgrepo-com 2.svg";

export default function ResultPage(props) {
  const { Orig } = useParams(); 
  const [results, setResults] = useState(); //result data
  const [resultsJsx, setResultsJsx] = useState();  //results jsx array of objects

  console.log(props.data);
  console.log(Orig);



  //!!  This is a function that get result of prices from the API 
//   async function OrigSetter(AirportFrom, AirportTo, departureDate) {
//     axios
//       .post("getResultForAlgo", {
//         from: AirportFrom,
//         to: AirportTo,
//         date: departureDate,
//       })
//       .then((response) => {
//         console.log(response.data.results);
//         // setResult(response.data.results)
//       });
//   }

  useEffect(() => {
    async function setter() {
      await axios
        .get("http://localhost:3004/resultForTesting")
        .then((response) => {
          setResults(response.data);
        });
    }
    setter();
  }, []);


  // A mapped array that returns a list of JSX objects that contain flight result data. 
  useEffect(() => {
    let resultJSX = results?.map((result) => {
      return <ResultComponent resultData={result} />;
    });
    setResultsJsx(resultJSX);
  }, [results]);

  console.log(results);

  return (
    <>
      <img src={airplane} className="airplane1" alt="airplane" />
      <div className="mainDivContainer">
        {resultsJsx?.length > 0 ? resultsJsx : <></>}
      </div>
      <img src={airplane} className="airplane2" alt="airplane" />
    </>
  );
}
