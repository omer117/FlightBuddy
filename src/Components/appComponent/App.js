import './App.scss';
import RegisterPage from '../../Pages/Auth/RegisterPage/RegisterPage';
import LogInPage from '../../Pages/Auth/LogInPage/LogInPage';
import SearchPage from '../../Pages/searchPage/Search';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ResultPage from '../../Pages/resultPage/ResultPage';
import NextResultPage from '../../Pages/nextResultPage/nestResultPage';
import LastResultPage from '../../Pages/lastResultsPage/lastResultPage';
import NavbarComponent from '../navBarComponent/navBarComponent';
import airplane from "../../assets/images/airplane-travel-svgrepo-com 2.svg";



export function App() {
  const [chosenAirportsDataList, setChosenAirportsDataList] = useState([]);
  const [firstChosenAirportsDataList, setFirstChosenFlightDataList] = useState(
    {}
  );
  const [secondChosenAirportsDataList, setSecondChosenFlightDataList] =
    useState({});
  const [chosenFlight, setChosenFlight] = useState([])


  useEffect(() => {
    let arr = [firstChosenAirportsDataList, secondChosenAirportsDataList]
    setChosenFlight(arr)
  }, [secondChosenAirportsDataList])

  return (
    <>
      <NavbarComponent />
      <img src={airplane} className="airplane1" alt="airplane" />
      <Routes>
        <Route path="/nextResult/:Orig" element={<NextResultPage setter={setSecondChosenFlightDataList} data={chosenAirportsDataList} />} />
        <Route path="/lastResult" element={<LastResultPage data={chosenFlight} />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/" element={<LogInPage />} />
        <Route path="/result/:Orig" element=
          {<ResultPage data={chosenAirportsDataList} setter={setFirstChosenFlightDataList} />} />
        <Route path="/Search" element={<SearchPage setterFunction={setChosenAirportsDataList} />} />
      </Routes>
      <img src={airplane} className="airplane2" alt="airplane" />

    </>
  );
}

export default App;
