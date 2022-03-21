
import './App.css';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import Watch from './components/watch/Watch';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uploade from './components/uploade/upload';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<div className='Home'>
    <Header/>
    <div className='app'>
     
    <Sidebar/>
       <Main/>
   </div>
    </div>} />
      
     
    

        
         
          <Route path="/watch" element={<div className='Home'><Watch/></div>} />
          <Route path="/insert" element={<Uploade />} />
         
        
      </Routes>
    </BrowserRouter>
   
   
     {/* <BrowserRouter>
    <Routes>
     <Route path='/'>
     <div className='Home'>
    <Header/>
    <div className='app'>
     
     <Sidebar/>
       <Main/>
   </div>
    </div>
    </Route>
   
    <Route path='/watch' element={<Watch/>} />
    </Routes>
    </BrowserRouter> */}
   
  </>
    
  );
}

export default App;
