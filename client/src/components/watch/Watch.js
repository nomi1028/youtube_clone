import React from 'react'
import videourl from '../../assests/001 Introduction.mp4'
import {IoThumbsUpSharp,IoThumbsDownSharp} from "react-icons/io5";

const watch = () => {
  return (
   <div className='Watch'>
       <div className='Watch_wrap'>
           <div className='watch_left'>
               <video className='watch_video' autoPlay controls>
                   <source src={videourl} type="video/mp4" />
               </video>
               <div className='watch_leftbtn'>
               <h1 className='watch_title'>
                   Introduction of css course
               </h1>
               <div className='watch_videoinfo'>
                   <div className='watch_videoinfoleft'>
                       <p className='videothumb_text'>
                           <p>123views.10hours ago</p>
                       </p>
                   </div>
                   <div className='watch_infovideoright'>
                   <div className='likecontainer'>
                       <div className='likewrap'>
                           <div className='likebtncontainer color--gray'>
                               <IoThumbsUpSharp className='watch_icon'/>
                               <p>10k</p>
                           </div>
                           <div className='likebtncontainer color--gray'>
                               <IoThumbsDownSharp className='watch_icon'/>
                               <p>10k</p>
                           </div>
                       </div>
                   </div>

                   </div>
               </div>

               </div>
           </div>
       </div>
   </div>
  )
}

export default watch