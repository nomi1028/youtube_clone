import React from 'react'
import img1 from '../../assests/images.png'

import {BiUserCircle} from "react-icons/bi";

import { useNavigate } from 'react-router-dom';

const VideoThumb = () => {
    let navigate = useNavigate();
    const handler=()=>{
        navigate('/watch');

    }
  return (
    <div className='videothumb'>
    <img
        className='videothumb_thumbnail'
        src={img1}
        onClick={handler}
    />
    <div className='videothumb_details'>
    <BiUserCircle className='pro'/>
    <div className='videothumb__channal'>
        
            <h1 className='videothumb__title'>create a Youtube clone</h1>
            <div className='videothumb__texts'>
            <p className='videothumb__text'>pulkitgupta</p>
            <p className='videothumb__text'>123 views .10 hour ago</p>


            </div>
        
    </div>
     
    </div>

    </div>
  )
}

export default VideoThumb