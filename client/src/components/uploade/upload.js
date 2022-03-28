import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Uploade = () => {
  
  let navigate = useNavigate();
  const [names1,setName1]=useState('');
  
  const [file2,setfile2]=useState('');

  // const [user, setUser] = useState({
  //   name1: names1,
  //   name2: names2,
  //   name3: names3,  
  //   file1: file1,
  //   file2: file2
  // });

  // const { name1,name2, name3, file1, file2 } = user;
  // const onInputChange = e => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };
  let formData = new FormData();
  formData.append('title', names1); 
   
  
  formData.append('img', file2); 

  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}





  const onSubmit = async e => {
    
    // console.log(file2)
    // console.log(formData);
    
    e.preventDefault();
    await axios.post(`http://localhost:5000/j`,
    formData, config)
    navigate('/');
    // navigate('/landing');
    // await axios.post(`http://localhost:5000/insert`,
    // {file1})
    //  {
    //   name1: names1,
    // name2: names2,
    // name3: names3,  
    
    // file2: file2
   
    // }
    
    // await axios.post(`http://localhost:5000/insert`,formData,config)
    // console.log("bbbbbbbb");

    
    // console.log(user);
    
  };
  return (
    <div className="container">
    <div className="bg-primary d-flex justify-content-center" style={{color:"white"}}>Insert Your Data</div>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Video Uploade</h2>
        <form onSubmit={e => onSubmit(e)} >
        
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter video title"
              name="name1"
              value={names1}
              onChange={(e)=>setName1(e.target.value)}
            />
          </div>
          
         
          
          <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg"
              
              name="file2"
            
              onChange={(e)=>setfile2(e.target.files[0])}
            />
          </div>
          <button className="btn btn-primary btn-block">Uploade</button>
        </form>
      </div>
    </div>
  );
};

export default Uploade;