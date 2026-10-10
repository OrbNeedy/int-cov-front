import React, { useEffect, useState } from 'react';
import UpdatesSidebar from '../components/UpdatesSidebar';
import SectionHeader from '../components/SectionHeader';
import './Common.css';

const Home = () => {
  return (
    <div className='content-with-side'>
      <div className='content' style={{ width: '70%' }}>
        <SectionHeader text={'Index'}/>
        <div className='containerless-title'>
          Introduction
        </div>
        <div style={{ padding: '8px' }}>
          My amazing page, where I place everything I want to show to the world! I want every visitor to be 
          witness to the existence of what I have created, be it Terraria mods, terrible pixelart, or even 
          unfinished games. Really! <br/>Now, if you are some sort of investor, or the like, I'd recomment 
          to see the download section and the profile section, I don't mean to imply you can't have fun, 
          but those are the shortcuts to my more private and mundane life, though anyone else is free to 
          inquire about it, I just don't promise to always respond~ <br/>Stay in here for a while, and take 
          in the beauty of the site, download some images, or other files if they are available, be free! 
          Also, yes, anyone can comment without a session or anything, so don't worry about it.
        </div>
      </div>
      <UpdatesSidebar/>
    </div>
  )
};

export default Home;