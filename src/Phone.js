import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Phone = () => {
  return (
    <div>
<Link to="/phoneform">Link with phone number</Link>
{/* <form>
    <h3>Enter Phone Number</h3>
    <p>Select a country and enter your wtsapp phone number</p>
<select>
    <option>India</option>
    <option>Usa</option>
    <option>Uk</option>
</select>
<input type="numbers" value="+91" max="10"></input>
</form> */}
    </div>
  )
}

export default Phone