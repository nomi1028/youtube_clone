import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Watch from "./components/watch/Watch";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uploade from "./components/uploade/upload";
import SearchCom from "./components/search/searchCom";

import Record from "./components/history/Record";
import Like from "./components/history/Like";
import Chips from "./components/main/Chips";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useState } from "react";

function App() {
  const[user,setloginuser]=useState({})
  
  return (
    <>
      <BrowserRouter>
        <div className="Home">
          <Header />
          <div className="app">
            <Sidebar setloginuser={setloginuser} />

            <Routes>
           {user && user._id ? 
              <Route exact path="/" element={<Main/>} />:
              <Route path="/" element={<Login setloginuser={setloginuser} />} />
           }
            
              <Route exact path="/search/:word" element={<SearchCom />} />
              <Route
                path="/watch/:id"
                element={
                  <div className="Home">
                    <Watch />
                  </div>
                }
              />
              {user && user._id ?
              <Route path="/insert" element={<Uploade />} />:
              <Route path="/insert" element={<Login setloginuser={setloginuser} />} />

              }
              
              {user && user._id ? 
              <Route exact path="/history" element={<Record />} />:
              <Route path="/history" element={<Login setloginuser={setloginuser} />} />
           }
           {user && user._id ?
              <Route path="/like" element={<Like />} />:
              <Route path="/like" element={<Login setloginuser={setloginuser} />} />
              }
              <Route path="/Chips/:type" element={<Chips />} />
              <Route path="/login" element={<Login setloginuser={setloginuser}/>} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
