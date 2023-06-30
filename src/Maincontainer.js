import React from 'react'
import Sidebar from './components/Sidebar'
import Communicate from './components/Communicate'

const Maincontainer = () => {
  const logos=<img src={'/src/image/profile.jpeg'} alt='pics'/>;
  return (
    <div className='mainContainer'>
      
        <Sidebar
        src={logos}  />
<Communicate />
    </div>
  )
}

export default Maincontainer