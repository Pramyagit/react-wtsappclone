import React from 'react'

import { HiDotsVertical } from "react-icons/hi";
import { FcSettings} from "react-icons/fc";
import Phone from './Phone';
// import wtsapp from './wtsapp.svg';
const Wtsappdetail = ({src}) => {
  return (
    <div className="detail">
      <div  className='condition'>
     <section>
      <h2>Use WhatsApp on your computer</h2>
<ul className='Lists'>
  <li>Open WhatsApp on your phone</li><br></br>
  <li>Tap<span>Menu</span><HiDotsVertical/> or<span>Setting</span><FcSettings/>and select <span>Linked Devices</span></li><br></br>
  <li>Tap on <span>Link a device</span></li><br></br>
  <li>Point your phone to this screen to capture the QR code</li><br></br>
</ul>
     </section>
<section className="qrcode">
  <img src={src} alt='images'></img>
</section>
      </div>
      <div className='links'>
<hr></hr>
<Phone />
    </div>

    </div>
 
  )
}

export default Wtsappdetail