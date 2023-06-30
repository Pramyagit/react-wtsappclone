import React from 'react'
import {BiRupee, BiPhoneCall, BiVideo, BiCamera } from 'react-icons/bi'
import { CiMenuKebab } from 'react-icons/ci'
import { HiMicrophone } from 'react-icons/hi'
import{GrAttachment} from 'react-icons/gr'
import {BsEmojiLaughingFill} from 'react-icons/bs'
import styled from 'styled-component';

const Communicate = ({src}) => {
const Message=styled.div`max-width:50%;
background:#daf8cb;
color:#303030;
padding:8px 10px;
 `;

const MessageDiv=styled.div`
display:flex;
margin:5px 16px;`;

  return (
    <div className='communicate'>
    <div className='person-communicate'>
    <div className='person-pro'>
    <img src={src} alt="photos"/>
      <p>Name</p>
    </div>
      <div className='icons-pic'>
      <span><BiVideo/></span>
      <span><BiPhoneCall/></span>
      <span><CiMenuKebab/></span>
      </div>
    </div>
<MessageDiv isYours={true}>
  <Message isYours={true}></Message>
</MessageDiv>

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