import React from 'react'
import {BiRupee, BiPhoneCall, BiVideo, BiCamera } from 'react-icons/bi'
import { CiMenuKebab } from 'react-icons/ci'
import { HiMicrophone } from 'react-icons/hi'
import{GrAttachment} from 'react-icons/gr'
import {BsEmojiLaughingFill} from 'react-icons/bs'
import { styled } from 'styled-components'

const Communicate = ({src}) => {
  const MessagesBox=styled.div`
  display:flex;
  height:100%;
  width:100%;
  flex-direction:column;
  overflow:scroll;
  `;
  
  const MessageDiv=styled.div `
  display:flex;
  // justify-content:flex-end;
justify-content: ${ props => props.isYours?'flex-start':'flex-end' };
  margin:5px 16px;
  `;

const Message=styled.div `
max-width:40%;
background: ${ props => props.isYours?'#daf8cb':'white' };
color:#303030;
padding:8px 10px;
font-size:16px;
margin:2px;
`;

  return (
    <div className='communicate'>
     <div className='person-communicate'>
         <div className='person-pro'>
          <img className='img' src={src} alt="photos"/>
            <p>Name</p>
          </div>
            <div className='icons-pic'>
            <span><BiVideo/></span>
            <span><BiPhoneCall/></span>
            <span><CiMenuKebab/></span>
            </div>
    </div>
    <MessagesBox>
   <MessageDiv isYours={true}>
     <Message isYours={true}>
       Hello,how are you?
     </Message>
   </MessageDiv>
   <MessageDiv >
     <Message >
       fine...
     </Message>
   </MessageDiv>
   <MessageDiv >
     <Message >
    what about you?
     </Message>
   </MessageDiv>
   <MessageDiv isYours={true} >
     <Message  isYours={true}>
good....
     </Message>
   </MessageDiv>
   </MessagesBox>
{/* 
   <div className="messageBox">
    <div className="contain">
      <div className="message">
        hello,how are you?
      </div>
    </div>
   </div> */}
   
    <div className="msg-typeBox">
        <div className='type-box'>
        <BsEmojiLaughingFill/>
          <input type=""></input>
          <p><GrAttachment/></p>
          <p><BiRupee/></p>
          <p><BiCamera/></p>
        </div>
        <div className='microPhone'><HiMicrophone/></div>
    </div>

 </div>

  )
}

export default Communicate