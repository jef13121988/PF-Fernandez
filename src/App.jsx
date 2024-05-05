import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './container/header/Header';
import MainHTML from './container/main-html/MainHTML';

function App() {
  return (
    <>
      <Header />
      <MainHTML />
    </>
  )
}

export default App;
