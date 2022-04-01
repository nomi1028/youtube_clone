import React from 'react'
import { BiHome } from "react-icons/bi";
import { MdOutlineWhatshot,MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineLogout,AiOutlineHistory,AiFillLike } from "react-icons/ai";
import "./style.css";

import { useNavigate} from 'react-router-dom';

const Sidebar = ({setloginuser}) => {
  let navigate = useNavigate();
    const history=()=>{
        navigate('/history');

    }
    
    const likes=()=>{
        navigate('/like');

    }
    const logouts=()=>{
      setloginuser('')
      navigate('/');

    }
  return (
    <div className='sidebar'>
        <div className='sidebar_buttons'>
            <div className='sidebar__btn sidebar__btn--active' onClick={history}>
            <AiOutlineHistory className='sidebar-icon' />
            <p>History</p>
            

            </div>
            <div className='sidebar__btn sidebar__btn--active' onClick={likes}>
            <AiFillLike className='sidebar-icon'/>
            <p>Like video</p>
            

            </div>
            
            <div className='sidebar__btn sidebar__btn--active' onClick={logouts}>
            <AiOutlineLogout className='sidebar-icon'/>
            <p>LogOut</p>
            

            </div>
        </div>
    </div>
  )
}

export default Sidebar