import './App.scss';
import RegisterPage from '../../Pages/Auth/RegisterPage/RegisterPage';
import LogInPage from '../../Pages/Auth/LogInPage/LogInPage';
import SearchPage from '../../Pages/searchPage/Search';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ResultPage from '../../Pages/resultPage/ResultPage';
import LastResultPage from '../../Pages/lastResultsPage/lastResultPage';
import NavbarComponent from '../navBarComponent/navBarComponent';
import airplane from "../../assets/images/airplane-travel-svgrepo-com 2.svg";
import MyFlightPage from '../../Pages/myFlightPage/myFlightPage';
import NextFlightPage from '../../Pages/nextFlightPage/NextFlightPage';

export function App() {
  const [chosenAirportsDataList, setChosenAirportsDataList] = useState([]);
  const [firstChosenAirportsDataList, setFirstChosenFlightDataList] = useState(
    {}
  );
  const [secondChosenAirportsDataList, setSecondChosenFlightDataList] =
    useState({});
  const [chosenFlight, setChosenFlight] = useState([])
  const [user, setUser] = useState('')
  console.log(firstChosenAirportsDataList);
  console.log(secondChosenAirportsDataList);

  useEffect(() => {
    window.addEventListener("beforeunload", (localStorage.clear()));
  }, [])

  useEffect(() => {
    let arr = [firstChosenAirportsDataList, secondChosenAirportsDataList]
    setChosenFlight(arr)
  }, [secondChosenAirportsDataList])

  return (
    <>
      <NavbarComponent user={user} />
      <img src={airplane} className="airplane1" alt="airplane" />
      <Routes>
        <Route path="/lastResult" element={<LastResultPage user={user} data={chosenFlight} />} />
        <Route path="/Register" element={<RegisterPage userSetter={setUser} />} />
        <Route path="/" element={<LogInPage userSetter={setUser} />} />
        <Route path="/myFlights" element={<MyFlightPage />} />
        <Route path="/nextFlight/:Orig" element={<NextFlightPage />} />
        <Route path="/result/:Orig"
          element=
          {<ResultPage data={chosenAirportsDataList}
            setter1={setFirstChosenFlightDataList}
            setter2={setSecondChosenFlightDataList}
            afterSetter1={firstChosenAirportsDataList}
            afterSetter2={firstChosenAirportsDataList}
          />}
        />
        <Route path="/Search" element={<SearchPage setterFunction={setChosenAirportsDataList} />} />
      </Routes>
      <img src={airplane} className="airplane2" alt="airplane" />

    </>
  );
}

export default App;
