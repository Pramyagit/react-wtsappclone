import React from 'react'
import logo from './logo.svg';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
        Welcome to Wtsapp Clone
       </p>
       <Link to="/wtsapp ">WtsappClone</Link>
      </header>
    </div>

  )
}

export default Home