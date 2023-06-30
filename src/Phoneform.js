import React from 'react'
import Wtspp from './Wtspp'
import { Link } from 'react-router-dom'
const Phoneform = ({phoneNo,handleSubmit,handleSelection,handlePhone}) => {
  return (
    <div>
    <Wtspp/>
    <div className='form wtsappLayer'>
    <form onSubmit={(e)=>handleSubmit(e.preventDefault())}>
    <h3>Enter Phone Number</h3>
    <p>Select a country and enter your wtsapp phone number</p>
<select onChange={handleSelection}>
<option value="">SelectOption</option>
    <option value="India">India</option>
    <option value="Usa">Usa</option>
    <option value="Uk">Uk</option>
</select>
<input type="numbers" value={phoneNo} placeholder='+91' max="10" onChange={handlePhone}></input>
<button className="btnForm" type="submit" value=""><Link to="/maincontainer">Next</Link></button>
</form>
<div className='Qrcodes'>
<Link to="/pasting">Link with QRcode</Link>
</div>
    </div>
     
    </div>
  )
}

export default Phoneform