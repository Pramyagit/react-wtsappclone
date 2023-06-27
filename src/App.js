import './App.css';
import React from 'react';
import Nopage from './Nopage';
import Home from './Home';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Wtspp from './Wtspp';
import Phone from './Phone';
import Wtsappdetail from './Wtsappdetail';
import Phoneform from './Phoneform';
import Pasting from './Pasting';

function App() {
  return (
<BrowserRouter>
    <div className="App">
      <header className="Appheader">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pasting" element={<Pasting/>}></Route>
          <Route path="*" element={<Nopage/>}></Route>
        </Routes>
      </header>
    </div>
        </BrowserRouter>








    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //      Welcome to Wtsapp Clone
    //     </p>
    //     <a
    //       className="App-link"
    //       href="#"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       >WtsappClone
    //     </a>
    //     <Nav />
    //   </header>

        
    // </div>
  );
}

export default App;
