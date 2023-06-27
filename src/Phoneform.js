import React from 'react'
import Wtspp from './Wtspp'
import { useParams } from 'react-router-dom';

const Phoneform = () => {
  const {id}=useParams();
  return (
    <div style={{backgroundColor:"red",color:'black'}}>Post {id}
    </div>
  )
}

export default Phoneform