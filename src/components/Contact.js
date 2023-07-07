import React from 'react';
// import { styled } from 'styled-components';
const Contact = ({userData,src}) => {

// const ProfileChat=styled.div`
// display:flex;
// flex-direction:column;
// background:"white";
// padding:15px;
// `;

// const {userData}=props;
  return (
   <div className='chat-persons'>
   {/* <ProfileChat className="img" src={src} /> */}
   <img className="img" src={src} alt=""/>
    <div className='person-detail'>
    <p className='name'>{userData.name}</p>
    <p className='msg'>{userData.lastText}</p>
  </div>
   <div className="msg-count">
     <p className='time'>{userData.lastTextTime}</p>
     <span class="badge">1</span>
   </div>
   </div>
  )
}

export default Contact