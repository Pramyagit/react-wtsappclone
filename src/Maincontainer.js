import React from 'react'
import Sidebar from './components/Sidebar'
import Communicate from './components/Communicate'
import images from './image/robin.jpg';
import image from './image/prof.jpg';
const Maincontainer = () => {
  return (
    <div className='mainContainer'>
        <Sidebar
        src={images}  />
<Communicate  src={image}
/>
    </div>
  )
}

export default Maincontainer