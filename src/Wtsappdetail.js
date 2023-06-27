import React from 'react'
import { Link } from 'react-router-dom'
import { HiDotsVertical } from "react-icons/hi";
import { FcSettings} from "react-icons/fc";
const Wtsappdetail = () => {
  return (
    <div class="detail">
     <section className='condition'>
      <h2>Use WhatsApp on your computer</h2>
<ul className='Lists'>
  <li>Open WhatsApp on your phone</li><br></br>
  <li>Tap<span>Menu</span><HiDotsVertical/> or<span>Setting</span><FcSettings/>and select <span>Linked Devices</span></li><br></br>
  <li>Tap on <span>Link a device</span></li><br></br>
  <li>Point your phone to this screen to capture the QR code</li><br></br>
</ul>
     </section>
<section class="qrcode">
  <img src="src/image/qrcode.png"alt='image'></img>
</section>
{/* <hr></hr> */}
{/* <Link to="/phone">Link with phone number</Link> */}

    </div>
  )
}

export default Wtsappdetail