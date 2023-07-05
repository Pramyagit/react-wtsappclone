import React from 'react'
import contactList from './data.js';
const Contact = ({userData}) => {
  return (
   <div className='chat-persons'>
{
  contactList && contactList.map((item)=>
<div key={item.id}>
  <img  className="img" src={contactList.profilePic} alt='pic'></img>
  
  </div>
  )
}
    <div className='person-detail'>
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