import React, { useState } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {BiUserCircle} from "react-icons/bi";
import "./style.css";

const SearchCom = () => {
    const [users, setUsers] = useState([]);
  const[loading,isloading]=useState(true);
const {word}=useParams()
    // console.log(word);
    useEffect(()=>{
        getData();
       
      },[]);
      async function getData() {
        const {data} = await axios.get(`http://localhost:5000/get`);
        console.log('searchdata',data);
        // console.log(res.data);
       
        
        const first3Char=word.substring(0,3)
        console.log('ist3',first3Char)
        let searchedResult=data.result.filter(item=>item.title.startsWith(first3Char))
        setUsers(searchedResult);
         
        isloading(false);
        
        console.log('srch',searchedResult);
      
       
      };


    

      console.log('usbbbbbbbbbbbbbbbbbbbbbbbb',users) 
  return loading ? (<h1>is loading</h1>): (
      
      <div className='videothumb'>
      {users.map((n) => {
          return (
              <>
              <img className='videothumb_thumbnail' src={n.img}></img>
              <div className='videothumb_details'>
    <BiUserCircle className='pro'/>
    <div className='videothumb__channal'>
       
            <h1 className='videothumb__title'>{n.title}</h1>
            <div className='videothumb__texts'>
            <p className='videothumb__text'>pulkitgupta</p>
            <p className='videothumb__text'>123 views .10 hour ago</p>


            </div>
       
    </div>
    
    </div>

              </>
          )
      })}
         
          
 
          </div>
         

  
  )
}

export default SearchCom