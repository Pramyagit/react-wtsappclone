import React from 'react'

const Sidebar = ({src}) => {
  return (
    <div className='sideView'>
    <div className='profile'>
        <img src={src} alt="image"></img>
      <div className="detail">
      <p>Name</p>
        <span>hello</span>
      </div>
    </div>
        {/* profiles */}
        <div className="rooms">
<img src="" alt='image'></img>
<p>Name</p>
<p>hello</p>      </div>
    
    </div>
  )
}

export default Sidebar