import React from 'react'
import Wtspp from './Wtspp'
import Wtsappdetail from './Wtsappdetail'
const Pasting = () => {
  return (
      <div>
        <Wtspp />
        <div className='wtsappLayer'>
        <Wtsappdetail  
        text="helo" />
    </div>
        </div>
  )
}

export default Pasting