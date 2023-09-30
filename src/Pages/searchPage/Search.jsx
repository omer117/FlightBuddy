import "./SearchPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Alert, AlertTitle, Button, Card, Link } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { Link } from "react-router-dom";

// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
  const [dateValue, setDateValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  // console.log(listOfAirports);
  function ComboBox(props) {
    return (
      <Autocomplete
        className="inputClass"
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
      .get("https://flightbuddyserver.onrender.com/flightsAPI/getAirports")
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
        setErrorMessage(error);
      });
  }, []);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let realFormData = Object.fromEntries(formData);
    console.log(`${dateValue.$D + 1}/${dateValue.$M}/${dateValue.$y}`);
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
    localStorage.setItem("firstFlight", airport1);
    localStorage.setItem("secondFlight", airport2);
    localStorage.setItem(
      "date",
      `${dateValue.$D + 1}/${dateValue.$M}/${dateValue.$y}`
    );
  };

  useEffect(() => {
    // a function that gets the list of airports after the algorithm has finished
    // using a function because you cannot async a useEffect function callback in react
    async function setter() {
      await axios
        .post(
          "https://flightbuddyserver.onrender.com/flightsAPI/useAirportAlgo",
          {
            firstAirport: chosenData[0],
            secondAirport: chosenData[1],
          }
        )
        .then((response) => {
          setListOfAirports(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setter();
  }, [chosenData]);

  useEffect(() => {
    // Gets the data of the algo-chosen airports

    async function setter() {
      let tempArr = [];
      if (listOfAirports[0] !== null) {
        for (let i = 0; i < listOfAirports.length; i++) {
          await axios
            .post(
              "https://flightbuddyserver.onrender.com/flightsAPI/getChosenAirportData",
              {
                targetAirport: listOfAirports[i].arr_code,
              }
            )
            .then((response) => {
              tempArr.push(response.data);
            });
        }
      }
      setListOfAirportAlgoData(tempArr);
    }
    setter();
  }, [listOfAirports]);

  console.log(listOfAirports[0]);
  // A mapped array of airports data that goes to JSX Object.
  let chosenList = listOfAirportAlgoData?.map((airport) => {
    return (
      <Card variant="contained" className="airportClass">
        <div className="countryName">{airport["Country Name"]}</div>
        <div className="code">{airport.Orig}</div>
        <Link underline="hover" href={`/result/${airport.Orig}`}>
          <div className="Name">{airport.Name}</div>
        </Link>
      </Card>
    );
  });

  return (
    <div className="containerDiv">
      {airportsNames.length > 0 ? (
        <div className="mainDiv">
          <div className="step1">
            <h2>Step 1: where both of you come from?</h2>
          </div>
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
              {/* <div className="dateSearchDiv">
                <p>And when?</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    htmlFor="date"
                    name="date"
                    label="date"
                    value={dateValue}
                    onChange={(newValue) => setDateValue(newValue)}
                  />
                </LocalizationProvider>
              </div> */}
            </form>
          </div>
          <div className="findAPlaceBtnDiv">
            <Button
              variant="contained"
              type="submit"
              form="findAirportForm"
              value="Submit"
            >
              Find us a place to meet at !
            </Button>
          </div>
          {listOfAirports[0] == null && chosenData.length > 0 ? (
            <Alert sx={{ mt: 3 }} severity="warning">
              <AlertTitle>We could not find a suitable airport</AlertTitle>
              Please try again with other airports
            </Alert>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <Box className="mainLoading" sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

      {chosenList.length > 0 ? (
        <div className="search2Div">
          <h1>Step 2: Choose where do you want to meet?</h1>
          <h2>This is the best places we found for you!</h2>
          <div className="airportsList">{chosenList}</div>
          <h2>Choose one and see your price options</h2>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
