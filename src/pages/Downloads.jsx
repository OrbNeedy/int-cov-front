import React, { useState } from 'react'
import UpdatesSidebar from '../components/UpdatesSidebar'
import SectionHeader from '../components/SectionHeader';
import './Common.css';

const Downloads = () => {
  const [ files, setFiles ] = useState([
    {id: 0, name: 'Muchers', version: 'Release', path: 'Muchers.exe'}, 
    {id: 1, name: 'Muchers', version: 'Release Fixed', path: 'Muchers.exe'}, 
    {id: 2, name: 'Muchers', version: 'Demo', path: 'Muchers.zip'}, 
    {id: 3, name: 'Utsuho', version: '0.1.2', path: 'Utsuho.exe'}, 
    {id: 4, name: 'Utsuho', version: '0.1', path: 'Utsuho.zip'}
  ]);
  const [ categories, setCategories ] = useState([
    {id: 0, title: 'Muchers', files: [0, 1, 2]}, 
    {id: 1, title: 'Utsuho Advent', files: [3, 4]}
  ]);

  return (
    <div className='content-with-side'>
      <div className='content' style={{ width: '70%' }}>
        <SectionHeader text={'External links'}/>

        <div style={{ padding: '8px' }}>
          Here is a link to my Itch.io, its very empty for now, but it won't be for long!
        </div>
        <ul className='link-list'>
          <li><a className='link-list' href='https://slimyorb.itch.io/'>Itch.io</a></li>
        </ul> 
        <br/>
        <div style={{ padding: '8px' }}>
          And here are links to my Terraria mods, only two so far, but still in development.<br/>
          I promise I am still working on the Gunvolt mod's wiki!
        </div>
        <ul>
          <li>
            <a className='link-list' href='https://steamcommunity.com/sharedfiles/filedetails/?id=3330689347'>
              Len'en Mod
            </a>
          </li>
          <li>
            <a className='link-list' href='https://steamcommunity.com/sharedfiles/filedetails/?id=3558658529'>
              Azure Striker Mod
            </a>
          </li>
        </ul> 

        {/*Uncomment once anything is released*/}
        {/*<SectionHeader text={'Direct Downloads'}/>

        <div style={{ padding: '8px' }}>
          Below are download links to some of my works, there may not be many for now, but hopefully 
          I will be able to deliver more soon.
        </div>

        {categories.map((value, key) => {
          return(
            <div className='download-container' key={key}>
              <div className='title-container'>
                {value.title}
              </div>
              <table>
                <tr>
                  <th style={{ borderLeft: '0px' }}>Version</th>
                  <th style={{ borderRight: '0px' }}>File</th>
                </tr>
                {files.map((file, fKey) => {
                  return(
                    <tr key={fKey}>
                      <td className='left-border'>{file.version}</td>
                      <td className='right-border'>{file.path}</td>
                    </tr>
                  )
                })}
              </table>
            </div>
          );
        })}*/}
      </div>
      <UpdatesSidebar/>
    </div>
  )
}

export default Downloads