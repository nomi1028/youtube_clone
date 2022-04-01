import axios from 'axios';
import React, { useState } from 'react'
import "./style.css";
import { useNavigate} from 'react-router-dom';

const Login = ({setloginuser}) => {
    const [user,setUser]=useState({
    
        email:"",
        pasword:""
       
    });
    const onHandle=(e)=>{
        const{name,value}=e.target
        console.log(name,value)
        setUser({...user,[name]:value})

    }
    const login=async()=>{
      const{email,pasword}=user
      console.log(user)
      await axios.post(`http://localhost:5000/login`,user).then(res=>{
        alert(res.data.message)
        setloginuser(res.data.user)

        navigate('/');
     })

    }
    let navigate = useNavigate();
    const register=()=>{
        navigate('/register');

    }
  
  return (
    <div className='login'>
   { console.log(user)}
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={onHandle} placeholder='Enter Email'></input>
        <input type="password"  name="pasword" value={user.pasword} onChange={onHandle} placeholder='Enter password'></input>
        <div className='button'onClick={login}>Login</div>
        <div>or</div>
        <div className='button'onClick={register}>Register</div>

    </div>
  )
}

export default Login