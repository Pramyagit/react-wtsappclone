
import React from 'react';
// import { styled } from 'styled-components';

const Contact = ({userData,key}) => {
  const handleClick=(userData)=>{
    const proName=userData.target.innerText;
    const prochat=userData.target.src;
  // console.log(prochat,proName)
  function handleChats(){
    const detil=document.getElementsByClassName('person-pro');
const proImg=document.getElementById('comuteImg');
const proname=document.getElementById('comuteName');
proImg.src=prochat;
proname.innerText=proName;
  detil.innerHTML=proImg.src + " " +proname.innerText; 

// console.log(detil.innerHTML)
  }
  handleChats();
}
  return (
   <div className='chat-persons' key={key}>
   {/* <ProfileChat className="img" src={src} /> */}
   <div className="containerimg"onClick={handleClick} >
   <img className="img" src={userData.profilePic} alt=""/>
    <p className='name'>{userData.name}</p>
   </div>
    <div className='person-detail'>
    <p className='msg'>{userData.lastText}</p>
  </div>
   <div className="msg-count">
     <p className='time'>{userData.lastTextTime}</p>
     <span className="badge">1</span>
   </div>
   </div>
  )
}

export default Contact