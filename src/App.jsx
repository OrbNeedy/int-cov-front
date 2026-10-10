import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Downloads from './pages/Downloads';
import About from './pages/About';
import Posts from './pages/Posts';
import NavBar from './components/NavBar';
import ExaminePost from './pages/ExaminePost';
import FOF from './pages/FOF';

// From this https://www.youtube.com/watch?v=7E6um7NGmeE&list=PLjwm_8O3suyOFd8LTFqgw9v7MqPNtgINA
const App = () => {
  function MoveToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function MoveToBottom() {
    document.body.scrollTop = document.body.scrollHeight; // For Safari
    document.documentElement.scrollTop = document.body.scrollHeight; // For Chrome, Firefox, IE and Opera
    // 
  }

  return (
    <div style={{ display: 'flex', flexFlow: 'column', height: '100%', alignItems: 'stretch' }}>
      <button className='circle-button top-button' onClick={MoveToBottom}>Bottom</button>
      <button className='circle-button bottom-button' onClick={MoveToTop}>Top</button>
      <div className='main-section'>
        <NavBar/>
        <div className='main-content'>{/**/}
          <Routes>
            <Route path='/int-cov-front/' element={<Home/>} />
            <Route path='/int-cov-front/blog' element={<Posts/>} />
            <Route path='/int-cov-front/blog/:id' element={<ExaminePost/>} />
            <Route path='/int-cov-front/gallery' element={<Gallery/>} />
            <Route path='/int-cov-front/creations' element={<Downloads/>} />
            <Route path='/int-cov-front/profile' element={<About/>} />
            <Route path='*' element={<FOF/>} />
          </Routes>
        </div>
        <div className='main-footer'>
          Copyright © 2026 Reboot All Rights Reserved.
        </div>
      </div>
    </div>
  )
};

export default App;