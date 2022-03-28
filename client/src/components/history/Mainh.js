import React, { useState } from "react";
import axios from "axios";
import History from "./History";
import "./style.css";
import { useEffect } from "react";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [loading, isloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await axios.get(`http://localhost:5000/like`);
    // console.log(res.data);
    setUsers(res.data);
    isloading(false);
    
  }
  console.log('user');
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className="main">
          {users.result.map((n) => (
            
            <History key={n._id} title={n.title} img={n.img} id={n._id}/>
          ))}
        </div>
      )}
    </>
  );
};

export default Main;
