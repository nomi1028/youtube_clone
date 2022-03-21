import React from 'react'
import { BiHome } from "react-icons/bi";
import { MdOutlineWhatshot,MdOutlineSubscriptions } from "react-icons/md";
import "./style.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar_buttons'>
            <div className='sidebar__btn sidebar__btn--active'>
            <BiHome className='sidebar-icon'/>
            <p>Home</p>
            

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