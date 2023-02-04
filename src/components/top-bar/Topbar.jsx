import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './topbar.css';

const Topbar = () => {

  const user =true;

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
                <li className='topListItem'>
                    <Link to="/" className='link'>HOME</Link>
                </li>
                <li className='topListItem'>
                <Link to="/" className='link'>ABOUT</Link>
                </li>
                <li className='topListItem'>
                <Link to="/" className='link'>CONTACT</Link>
                </li>
                <li className='topListItem'>
                <Link to="/write" className='link'>WRITE</Link>
                </li>
                <li className='topListItem'>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <Outlet />
        <div className='topRight'>
            {
                user ? (
                    <img 
                    className='topImg'
                    src='https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png'
                    alt='some'
                />
                ) : (
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link to="/login" className='link'>LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                            <Link to="/register" className='link'>REGISTER</Link>
                        </li>
                    </ul>


                )

            }
            <Outlet />

            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar