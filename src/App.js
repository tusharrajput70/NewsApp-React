import './App.css';


// api key: 474b553e5d074992b71c6eeb63c2c0ad
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const apiKey=process.env.REACT_APP_NEWS_API;
  const pageSize=10
  const [progress,setProgress]=useState(0);
    return (
      <div>
        <BrowserRouter>
        <NavBar></NavBar>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          {/* here after doing everything required in router it is still not worknig as our page already have mounted the content over webpage so to forcefully mount it we have to pass unique key in our components
           */}
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general'  pageSize={pageSize} country='in' category='general'/>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business'  pageSize={pageSize} country='in' category='business'/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment'/>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health'/>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science'/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports'/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology'/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
export default App;
