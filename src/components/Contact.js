import React from 'react'
const Contact = ({src,userData}) => {
  return (
   <div className='chat-persons'>
    <div className='person-detail'>
  <img  className="img" src={src} alt='pic'></img>
    <p className='name'>{userData.name}</p>
    <p className='msg'>{userData.lastText}</p>
  </div>
   <div className="msg-count">
     <p className='time'>3.30pm</p>
     <span>1</span>
   </div>
   </div>
  )
}

export default Contact