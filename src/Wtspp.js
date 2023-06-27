import React from 'react'
import logo from './logo.svg';
import Wtsappdetail from './Wtsappdetail';
const Wtspp = () => {
  return (
<div>
    <section >
            <div className='clone'>
                Wtsapp web
            </div>
            <div className='clones'></div>
    </section>
    <section>
<img className="wtsapp-icon"src={logo}></img>
    <div className='wtsappLayer'>
        <Wtsappdetail />
    </div>
    </section>
    </div>
  )
}

export default Wtspp