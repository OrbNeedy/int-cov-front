import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

// Add banner at the top
const NavBar = () => {
    const [ visible, setVisible ] = useState(false);
    return (
    <div className='header-display'>
        <h1 style={{ fontWeight: 'bolder' }}>Intermediary Cover Base of Operations</h1>
        
        <div className='nav-bar'>
            <NavLink to='/' className='nav-bar-item'>
                Index
            </NavLink>
            <NavLink to='/blog' className='nav-bar-item'>
                Blog
            </NavLink>
            <NavLink to='/gallery' className='nav-bar-item'>
                Gallery
            </NavLink>
            <NavLink to='/creations' className='nav-bar-item'>
                Creations
            </NavLink>
            <NavLink to='/profile' className='nav-bar-item'>
                Profile
            </NavLink>
        </div>
    </div>
    )
}

export default NavBar