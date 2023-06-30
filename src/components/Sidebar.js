import React from 'react'
import { HiUserGroup} from "react-icons/hi"
import{BiMessageRoundedDetail}  from "react-icons/bi"
import {CiMenuKebab} from 'react-icons/ci'
import{BiSolidArchiveIn} from 'react-icons/bi'
const Sidebar = ({src}) => {
  return (
    <div className='sideView'>
    <div className='profile'>
        <img src={src} alt="pic"></img>
      <div className="detail">
      <span><HiUserGroup/></span>
      <span>2</span>
      <span><BiMessageRoundedDetail/></span>
      <span><CiMenuKebab/></span>
      </div>
    </div>
   

        {/* profiles */}
  <div className="rooms">
        <div className="search">
        <input type="search"placeholder='search'></input>
      </div>
<div className="archive">
  <span><BiSolidArchiveIn/></span>
<span>Archived</span>
<span>1</span>
</div>
<div className='chat-rooms'>
 <div className='chat-persons'>
    <img src={src} alt='pic'></img>
    <div className='person-detail'>
    <p className='name'>Name</p>
    <p className='msg'>hello</p>
  </div>
   <div className="msg-count">
     <p className='time'>3.30pm</p>
     <span>1</span>
   </div>
</div>
{/*  */}
<div className='chat-persons'>
    <img src={src} alt='pic'></img>
    <div className='person-detail'>
    <p className='name'>Name</p>
    <p className='msg'>hello</p>
  </div>
   <div className="msg-count">
     <p className='time'>3.30pm</p>
     <span>1</span>
   </div>
</div>
{/*  */}
<div className='chat-persons'>
    <img src={src} alt='pic'></img>
    <div className='person-detail'>
    <p className='name'>Name</p>
    <p className='msg'>hello</p>
  </div>
   <div className="msg-count">
     <p className='time'>3.30pm</p>
     <span>1</span>
   </div>
</div>
{/*  */}
<div className='chat-persons'>
    <img src={src} alt='pic'></img>
    <div className='person-detail'>
    <p className='name'>Name</p>
    <p className='msg'>hello</p>
  </div>
   <div className="msg-count">
     <p className='time'>3.30pm</p>
     <span>1</span>
   </div>
</div>

<div className='chat-persons'>
    <img src={src} alt='pic'></img>
    <div className='person-detail'>
    <p className='name'>Name</p>
    <p className='msg'>hello</p>
  </div>
   <div className="msg-count">
     <p className='time'>3.30pm</p>
     <span>1</span>
   </div>
</div>
{/*  */}
<div className='chat-persons'>
    <img src={src} alt='pic'></img>
    <div className='person-detail'>
    <p className='name'>Name</p>
    <p className='msg'>hello</p>
  </div>
   <div className="msg-count">
     <p className='time'>3.30pm</p>
     <span>1</span>
   </div>
</div>





</div>
</div>
    
  </div>
  )
}

export default Sidebar