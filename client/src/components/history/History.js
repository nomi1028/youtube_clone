import React from "react";

import { useNavigate } from "react-router-dom";




import {BiUserCircle} from "react-icons/bi";



const History = (props) => {
    // console.log(props,'like')
 
    let navigate = useNavigate();
    const handler=(id)=>{
        navigate(`/watch/${id}`);
        // console.log(id,"id")

    }
    return (

       
      
      
    <div className='videothumb'>
     
                  
 
    <img
        className='videothumb_thumbnail'
        src={props.img}
        onClick={handler.bind(null,props.id)}
    />
    <div className='videothumb_details'>
    <BiUserCircle className='pro'/>
    <div className='videothumb__channal'>
        
            <h1 className='videothumb__title'>{props.title}</h1>
            <div className='videothumb__texts'>
            <p className='videothumb__text'>pulkitgupta</p>
            <p className='videothumb__text'>123 views .10 hour ago</p>


            </div>
        
    </div>
     
    </div>
    
    

    </div>
   
  )
}

export default History