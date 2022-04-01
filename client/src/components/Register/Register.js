import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Register = () => {
    const [user,setUser]=useState({
        name:"",
        email:"",
        pasword:"",
        reEnterpassword:""
        
    });
    const onHandle=(e)=>{
        const{name,value}=e.target
        console.log(name,value)
        setUser({...user,[name]:value})


    }
    const register=async()=>{
        const{name,email,pasword,reEnterpassword}=user
        if(name && email && pasword && (pasword===reEnterpassword)){
            
            await axios.post(`http://localhost:5000/Signup`,user).then(res=>console.log(res,"nnnn"))
            navigate('/login');
            
            

        }
        else{
            alert("pasword not match")
        }
       

    }
    let navigate = useNavigate();
    const login=()=>{
        navigate('/login');

    }
  return (
    <div className='Register'>
    {console.log(user)}
        <h1>Register</h1>
        <input type="text"  name="name" value={user.name}  onChange={onHandle} placeholder='Enter Name'></input>
        <input type="email" name="email" value={user.email} onChange={onHandle} placeholder='Enter Email'></input>
        <input type="password" name="pasword" value={user.pasword} onChange={onHandle} placeholder='Enter password'></input>
        <input type="password" name="reEnterpassword" value={user.reEnterpassword} onChange={onHandle} placeholder='Re-enter password'></input>
        
        
        <div className='button' onClick={register}>Register</div>
        <div>or</div>
        <div className='button'onClick={login}>Login</div>

    </div>
  )
}

export default Register