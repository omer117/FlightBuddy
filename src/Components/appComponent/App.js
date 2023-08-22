import './App.scss';
import RegisterPage from '../../routes/Auth/RegisterPage/RegisterPage';
import LogInPage  from '../../routes/Auth/LogInPage/LogInPage';
import SearchPage from '../../routes/searchPage/Search';
import NavbarComponent from '../navbarComponent/navbarComponent';
import {  Routes, Route } from 'react-router-dom'
import ResultPage from '../../routes/resultPage/ResultPage';


function App() {
  return (
    <>
      {/* <NavbarComponent /> */}
      <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/Search" element={<SearchPage />} />
      <Route path="/results" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
