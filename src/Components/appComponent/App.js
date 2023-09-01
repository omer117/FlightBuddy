import './App.scss';
import RegisterPage from '../../routes/Auth/RegisterPage/RegisterPage';
import LogInPage  from '../../routes/Auth/LogInPage/LogInPage';
import SearchPage from '../../routes/searchPage/Search';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import ResultPage from '../../routes/resultPage/ResultPage';


export function App() {
  const [chosenAirportsDataList,setChosenAirportsDataList]=useState([]);

  return (
    <>
 
      <Routes>
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/" element={<LogInPage />} />
        <Route path="/result/:Orig" element={<ResultPage data={chosenAirportsDataList}/>} /> 
        <Route path="/Search" element={<SearchPage setterFunction={setChosenAirportsDataList}/>} />
      </Routes>
    </>
  );
}

export default App;
