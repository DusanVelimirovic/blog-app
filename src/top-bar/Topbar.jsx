import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcons fa-brands fa-facebook"></i>
            <i className="topIcons fa-brands fa-square-instagram"></i>
            <i className="topIcons fa-brands fa-square-twitter"></i>
            <i className="topIcons fa-brands fa-pinterest"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
            <img 
                className='topImg'
                src='https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png'
                alt='some'
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar