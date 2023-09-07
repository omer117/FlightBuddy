import "./SearchPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function SearchPage(props) {
  // All of the names of the big airports of the world
  const [airportsNames, setAirportNames] = useState([]);
  // Airports data lists that contain name and code
  const [airportDataList, setAirportDataList] = useState([]);
  // List that contains [first chosen airport,second chosen airport,date of departure]
  const [chosenData, setChosenData] = useState([]);
  //  Airports that was given by the algorithm
  const [listOfAirports, setListOfAirports] = useState([]);
  //  The data of airports that was given by the algorithm
  const [listOfAirportAlgoData, setListOfAirportAlgoData] = useState([]);

  function ComboBox(props) {
    console.log(listOfAirports);
    return (
      <Autocomplete
        disablePortal={true}
        autoHighlight
        id="combo-box-demo"
        options={airportsNames}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            className="textFieldStl"
            {...params}
            label="airportList"
            variant="outlined"
            required
            htmlFor={props.htmlFor}
            type="text"
            name={props.name}
          />
        )}
      />
    );
  }

  useEffect(() => {
    axios
      .get("http://localhost:3004/flightsAPI/getAirports")
      .then((response) => {
        let data = response.data.airports;
        let newAirportsArr = [];
        let AirportData = [];

        for (let i = 0; i < data.length; i++) {
          newAirportsArr.push(data[i].Name);
        }
        for (let x = 0; x < data.length; x++) {
          AirportData.push({
            airportCode: data[x].Orig,
            airportName: data[x].Name,
          });
        }

        let airportNames = newAirportsArr.filter((v, i, self) => {
          return self.indexOf(v) === i;
        });

        setAirportDataList(AirportData);
        setAirportNames(airportNames);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let realFormData = Object.fromEntries(formData);
    let airport1;
    let airport2;

    for (let i = 0; i < airportDataList.length; i++) {
      if (airportDataList[i].airportName === realFormData.airport1) {
        airport1 = airportDataList[i].airportCode;
      }
      if (airportDataList[i].airportName === realFormData.airport2) {
        airport2 = airportDataList[i].airportCode;
      }
    }
    setChosenData([airport1, airport2, realFormData.dateOfFlight]);
    props.setterFunction([airport1, airport2, realFormData.dateOfFlight]);
  };

  useEffect(() => {
    // a function that gets the list of airports after the algorithm has finished
    // using a function because you cannot async a useEffect function callback in react
    async function setter() {
      await axios
        .post("http://localhost:3004/flightsAPI/useAirportAlgo", {
          firstAirport: chosenData[0],
          secondAirport: chosenData[1],
        })
        .then((response) => {
          setListOfAirports(response.data);
        });
    }
    setter();
  }, [chosenData]);

  useEffect(() => {
    // Gets the data of the algo-chosen airports
    async function setter() {
      let tempArr = [];
      for (let i = 0; i < listOfAirports.length; i++) {
        await axios
          .post("http://localhost:3004/flightsAPI/getChosenAirportData", {
            targetAirport: listOfAirports[i].arr_code,
          })
          .then((response) => {
            tempArr.push(response.data);
          });
      }
      setListOfAirportAlgoData(tempArr);
    }
    setter();
  }, [listOfAirports]);

  // A mapped array of airports data that goes to JSX Object.
  let chosenList = listOfAirportAlgoData?.map((airport) => {
    return (
      <div className="airportClass">
        <Link to={`result/${airport.Orig}`}>
          <div className="Name">{airport.Name}</div>
        </Link>
        <div className="code">{airport.Orig}</div>
        <div className="countryName">{airport["Country Name"]}</div>
      </div>
    );
  });

  return (
    <>
      <div className="mainDiv">
        <div className="searchDiv">
          <form onSubmit={onFormSubmit} id="findAirportForm">
            <div className="placesSearchDiv">
              <div className="userOrigin">
                <p>I'm coming from</p>
                <ComboBox htmlFor="airport1" name="airport1" />
              </div>
              <div className="BuddyOrigin">
                <p>My buddy comes from</p>
                <ComboBox htmlFor="airport2" name="airport2" />
              </div>
            </div>
            <div className="dateSearchDiv">
              <p>And when?</p>
              <input type="date" htmlFor="dateOfFlight" name="dateOfFlight" />
            </div>
          </form>
        </div>
        <Button
          className="findAPlaceBtn"
          variant="contained"
          type="submit"
          form="findAirportForm"
          value="Submit"
        >
          Find us a place to meet at !
        </Button>
        <div className="search2Div">
          {chosenList.length > 0 ? (
            <div>
              <h2>This is what our algorhithem found for you</h2>
              <div className="airportsList">{chosenList}</div>
              <h2>Choose one and see your price options</h2>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
