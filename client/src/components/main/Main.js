import React, { useState } from "react";
import axios from "axios";
import VideoThumb from "./VideoThumb";
import "./style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [loading, isloading] = useState(true);
  let navigate = useNavigate();
    const handler=(type)=>{
        navigate(`/Chips/${type}`);
        // console.log(id,"id")

    }
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await axios.get(`http://localhost:5000/get`);
    // console.log(res.data);
    setUsers(res.data);
    isloading(false);
    console.log(users.result);
  }
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
        <div className="chips">
        {users.result.map((n) => (
          <div className="circle"  onClick={handler.bind(null,n.type)}><p>{n.type}</p></div>
          ))}
        
        
        
        
        
       
        </div>
        
        <div className="main">
       
        
          {users.result.map((n) => (
            <VideoThumb key={n._id} title={n.title} img={n.img} id={n._id}/>
          ))}
          
        </div>
        </div>
      )}
    </>
  );
};

export default Main;
