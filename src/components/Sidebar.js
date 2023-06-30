import React from 'react'

const Sidebar = ({src}) => {
  return (
    <div className='sideView'>
    <div className='profile'>
        <img src={src} alt="pic"></img>
      <div className="detail">
      <p>Name</p>
        <span>hello</span>
      </div>
    </div>
        {/* profiles */}
        <div className="rooms">
<img src="" alt='pic'></img>
<p>Name</p>
<p>hello</p>      </div>
    
    </div>
  )
}

export default Sidebar