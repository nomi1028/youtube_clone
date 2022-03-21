import React from "react";
import { BiMenu } from "react-icons/bi";
import {BiSearch,BiVideoPlus,BiUserCircle} from "react-icons/bi";
import { TiThSmallOutline } from "react-icons/ti";
import {AiFillBell } from "react-icons/ai";
import logo from '../../assests/youtubelogo.svg'
import "./style.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  


    let navigate = useNavigate();
    const upload=()=>{
        navigate('/insert');

    }
  return (
    <div className="header">
  <div className="header_left">
  <BiMenu className="header_menuicon"/>
  <img className="header_logo" src={logo} />
</div>
<form className="header_center">
<input className="header_input" placeholder="Search"/>
<button className="header_btn">
<BiSearch className="header_searchIcon"/>

</button>

</form>
<div className="header_right">
<BiVideoPlus onClick={upload}/>
<TiThSmallOutline/>
<AiFillBell/>
<BiUserCircle/>


</div>
</div>


  );
};

export default Header;
