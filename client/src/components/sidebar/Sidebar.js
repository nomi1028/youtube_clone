import React from 'react'
import { BiHome } from "react-icons/bi";
import { MdOutlineWhatshot,MdOutlineSubscriptions } from "react-icons/md";
import "./style.css";
import { useNavigate} from 'react-router-dom';

const Sidebar = () => {
  let navigate = useNavigate();
    const history=()=>{
        navigate('/history');

    }
  return (
    <div className='sidebar'>
        <div className='sidebar_buttons'>
            <div className='sidebar__btn sidebar__btn--active' onClick={history}>
            <BiHome className='sidebar-icon' />
            <p>History</p>
            

            </div>
            <div className='sidebar__btn sidebar__btn--active'>
            <MdOutlineWhatshot className='sidebar-icon'/>
            <p>Trending</p>
            

            </div>
            <div className='sidebar__btn sidebar__btn--active'>
            <MdOutlineSubscriptions className='sidebar-icon'/>
            <p>Subscription</p>
            

            </div>
        </div>
    </div>
  )
}

export default Sidebar