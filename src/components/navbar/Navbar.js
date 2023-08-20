import React, { useRef } from 'react'
import "./navbar.css"

const Navbar = ({handleSide}) => {
    const menuButton = useRef();


  return (
    <div id='Navbar'>
        <div id="navbar-container">
            <div id="left-nav">
                <div className="menu-bar" onClick={()=>{handleSide("click")}} ref={menuButton}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="logo-container">
                    <a href="/">
                        <div className="logo">
                            <img src={require("../../assets/navbar/icons8-microsoft-stream-2019-96.png")} id='company-logo' alt="" />
                        </div>
                        <div className="company-name">AKERU</div>
                    </a>
                </div>
            </div>
            <div id="center-nav">
                <div className="search-bar">
                    <button className="searchButton" type='submit'>
                        <img src={require("../../assets/navbar/icons8-search-50.png")} id='search-button' alt="" />
                    </button>
                    <input type="text"  placeholder="Search" name="search" id="search" />
                </div>
            </div>
            <div id="right-nav">
                <div className="message">
                    <div className="notification1"></div>
                    <img src={require("../../assets/navbar/messenger.png")} id='message-button' alt="" />
                </div>
                <div className="notice">
                {/* <div className="notification2"></div> */}
                    <img src={require("../../assets/navbar/bell.png")} id='notice-icon' alt="" />
                </div>
                <div className="status">
                    <div className="entry">
                        <div className="sign-in">
                            Sign In
                        </div>
                        <img src={require("../../assets/navbar/user.png")} className='user-icon' alt="" />
                    </div>
                </div>
            </div>
            <div id="right-nav1">
                <div className="entry1">
                    <img src={require("../../assets/navbar/user.png")} className='user-icon1' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar