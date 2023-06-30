import './App.css';
import React, {useEffect, useState } from 'react';
import Nopage from './Nopage';
import Home from './Home';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Pasting from './Pasting';
import Phoneform from './Phoneform';
import QRCode from 'qrcode';
import Maincontainer from './Maincontainer';
function App({text}) {
const[src,setSrc]=useState('');
useEffect(()=>{
  QRCode.toDataURL(text).then((data)=>
  setSrc(data))
},[]);

const[option,setOption]=useState('');
const[phoneNo,setPhoneNo]=useState('');
const handleSubmit=()=>{
  setPhoneNo('')
}
const handleSelection=(e)=>{
//  console.log(e.target.value)
   setOption(e.target.value);
}
const handlePhone=(e)=>{
  // e.preventDefault();
  setPhoneNo(e.target.value)
  console.log(e.target.value)
}

return (
<BrowserRouter>
    <div className="App">
     {/* <Qrcode src={src} /> */}
      <header className="Appheader">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pasting" >
          <Route index element={<Pasting
          src={src} 
          />}/>
              <Route path=":id" element={<Phoneform
              handleSubmit={handleSubmit}
              option={option}
              // setOption={setOption}
              phoneNo={phoneNo}
              // setPhoneNo={setPhoneNo}
              handleSelection={handleSelection}
              handlePhone={handlePhone}
              />}/>
          </Route>
          <Route path="/maincontainer" element={<Maincontainer/>}/>
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
