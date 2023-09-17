import { useEffect, useState } from 'react';
import './NextFlightPage.scss'
import axios from 'axios';
import ResultComponent from '../../Components/ResultComponent/resultComponent';
import { Link, useParams } from 'react-router-dom';


export default function NextFlightPage(props){
    const [secondResults, secondAirportResult] = useState([]); //results jsx array of objects
    const [secondResultsJsx, setSecondResultjsx] = useState([]); //results jsx array of objects
    const { Orig } = useParams();
    const [selectedElementIndex, setSelectedElementIndex] = useState(null);
    
    useEffect(() => {
      async function OrigSetter(from, to) {
        axios
        .post("https://flightbuddyserver.onrender.com/flightsAPI/getChosenAirportsFlights", {
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

    console.log(secondResults);
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
      }, [props.setter2, secondResults, selectedElementIndex]);
    
    

    return(
      <div className="containerDiv">
        <div className="mainDivContainer">
        {secondResultsJsx?.length > 0 ? (
          <div>
            <h2>Now Choose your buddy flight!</h2>
            <div className="SubContainer">
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
          </div>
    )
}