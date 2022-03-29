import React, { useState } from "react";
import axios from "axios";
import VideoThumb from "./VideoThumb";
import "./style.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Chips = () => {
  const [users, setUsers] = useState([]);
  const [loading, isloading] = useState(true);
  const { type } = useParams();
  console.log(type,"phnch raha ha")

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const res = await axios.get(`http://localhost:5000/type/${type}`);
    // console.log(res.data);
    setUsers(res.data);
    isloading(false);
    console.log(users.result, "result");
  }
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className="main">
          {users.result.map((n) => (
            <VideoThumb key={n._id} title={n.title} img={n.img} id={n._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Chips;
