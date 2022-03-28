import React, { useState } from "react";
import axios from "axios";
import VideoThumb from "./VideoThumb";
import "./style.css";
import { useEffect } from "react";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [loading, isloading] = useState(true);
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
        <div className="main">
          {users.result.map((n) => (
            <VideoThumb key={n._id} title={n.title} img={n.img} id={n._id}/>
          ))}
        </div>
      )}
    </>
  );
};

export default Main;
