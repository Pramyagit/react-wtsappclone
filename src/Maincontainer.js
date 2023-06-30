import React from 'react'
import Sidebar from './components/Sidebar'
import Communicate from './components/Communicate'
import images from './image/robin.jpg';
import image from './image/profile.jpeg';
const Maincontainer = () => {
  return (
    <div className='mainContainer'>
        <Sidebar
        src={image}  />
<Communicate  src={images}/>
    </div>
  )
}

export default Maincontainer