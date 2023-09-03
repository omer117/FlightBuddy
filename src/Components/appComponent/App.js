import './App.scss';
import RegisterPage from '../../Pages/Auth/RegisterPage/RegisterPage';
import LogInPage from '../../Pages/Auth/LogInPage/LogInPage';
import SearchPage from '../../Pages/searchPage/Search';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import ResultPage from '../../Pages/resultPage/ResultPage';


export function App() {
  const [chosenAirportsDataList, setChosenAirportsDataList] = useState([]);


  return (
    <>

      <Routes>
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/LogIn" element={<LogInPage />} />
        <Route path="/result/:Orig" element=
          {<ResultPage data={chosenAirportsDataList} />} />
        <Route path="/" element={<SearchPage setterFunction={setChosenAirportsDataList} />} />
      </Routes>
    </>
  );
}

export default App;
