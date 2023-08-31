import './App.scss';
// import RegisterPage from '../../routes/Auth/RegisterPage/RegisterPage';
// import LogInPage  from '../../routes/Auth/LogInPage/LogInPage';
import SearchPage from '../../routes/searchPage/Search';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import ResultPage from '../../routes/resultPage/ResultPage';
// import ResultPage from '../../routes/resultPage/ResultPage';


export function App() {
  const [chosenAirportsDataList,setChosenAirportsDataList]=useState([]);

  return (
    <>
      {/* <NavbarComponent /> */}
      {/* <div>hi</div> */}
      <Routes>
        {/* <Route path="/Register" element={<RegisterPage />} /> */}
        {/* <Route path="/Search" element={<SearchPage />} /> */}
        <Route path="/result/:Orig" element={<ResultPage data={chosenAirportsDataList}/>} /> 
        <Route path="/" element={<SearchPage setterFunction={setChosenAirportsDataList}/>} />
      </Routes>
    </>
  );
}

export default App;
