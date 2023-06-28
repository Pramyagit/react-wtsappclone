import React from 'react'
import Wtspp from './Wtspp'
import Wtsappdetail from './Wtsappdetail'
const Pasting = ({src}) => {
  return (
      <div>
        <Wtspp />
        <div className='wtsappLayer'>
        <Wtsappdetail  
        src={src} />
    </div>
        </div>
  )
}

export default Pasting