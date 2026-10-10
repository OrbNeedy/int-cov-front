import React from 'react'
import UpdatesSidebar from '../components/UpdatesSidebar';
import SectionHeader from '../components/SectionHeader';
import './Common.css';
import './About.css';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='content-with-side'>
      <div className='content' style={{ width: '70%' }}>
        <SectionHeader text={'Profile'}/>
        <div className='introductory-card-container'>
          <div className='introductory-card-image'>
            Reboot
            <img alt='Reboot' src={assets.portrait}/>
          </div>
          <div className='introductory-card-quote'>
            What? I'm not telling you my real name~
          </div>
        </div>
        <div style={{ padding: '8px' }}>
          It is I, the ruler of this land! I'd like to say that, but in truth, I am a slave to the inner 
          machinations of my mind.<br/>It's alright though, I like it this way, my impulses are creative 
          and I will make sure everyone knows what my creations are about.<br/>Fueled by sweets and an 
          insatiable urge to make things, this human will not go anywhere.
        </div>
        <SectionHeader text={'Contact'}/>
        <div style={{ padding: '8px' }}>
          For any inquiry, make sure you use one of these contact routes, I'll be waiting.
        </div>
        <div className='content-container' style={{ padding: '8px' }}>
          email: theviod36@gmail.com
        </div>
      </div>
      <UpdatesSidebar/>
    </div>
  )
}

export default About