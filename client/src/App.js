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

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="Home">
          <Header />
          <div className="app">
            <Sidebar />

            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/search/:word" element={<SearchCom />} />
              <Route
                path="/watch/:id"
                element={
                  <div className="Home">
                    <Watch />
                  </div>
                }
              />
              <Route path="/insert" element={<Uploade />} />
              <Route path="/history" element={<Record/>} />
              <Route path="/like" element={<Like/>} />
              <Route path="/Chips/:type" element={<Chips/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
