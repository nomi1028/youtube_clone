import React, { useState } from "react";
// import videourl from '../../assests/001 Introduction.mp4'
import {IoThumbsUpSharp,IoThumbsDownSharp} from "react-icons/io5";
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const Watch = () => {
    const [video, setvideo] = useState([]);
    const[loading,isloading]=useState(true);
    const [img, setimg] = useState();
    const[title,settitle]=useState();
    const {id}=useParams()
    // http://localhost:5000/q
    
    async function getData() {
        const res = await axios.get(`http://localhost:5000/${id}`);
        setimg(res.data.actorData.img)
        settitle(res.data.actorData.title)
        setvideo(res.data)
        // console.log(res.data.actorData.title,'responcedata')
            
         
         isloading(false);
         if(!loading){
            postData();
         }

        console.log(res.data);
         
      
        
        

       
    

    };
    async function postData() {
        

        
        const resp = await axios.post(`http://localhost:5000/history`,{
            img1: img,
            title1: title
          }
        )
        
        console.log(img,'loading')
        
        
        

        
        
        
        // console.log(img,'img')
        // console.log(title,'title')
        // console.log(resp.data,'postdata')
      
        
        

       
    

    };
    async function liked() {
        const resp = await axios.post(`http://localhost:5000/liked`,{
            img1: img,
            title1: title
          }
        )
       
        
        
        
        // console.log(img,'img')
        // console.log(title,'title')
        
      
        
        

       
    

    };
    useEffect(()=>{
        
        
        
          
        getData();
       
        
      },[]);
    

      

      

    
  return (
      <>
      {loading ? (
        "loading"
      ) : (
   <div className='Watch'>
       <div className='Watch_wrap'>
           <div className='watch_left'>
               {/* <video className='watch_video' autoPlay controls>
                   <source src={videourl} type="video/mp4" />
               </video> */}
               <img
        className='videothumb_thumbnail'
        src={video.actorData.img}
       
    />
               <div className='watch_leftbtn'>
               <h1 className='watch_title'>
                   {video.actorData.title}
                   {/* aaa */}
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
                               <IoThumbsUpSharp className='watch_icon' onClick={liked}/>
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
      )}
   </>
  )
}

export default Watch