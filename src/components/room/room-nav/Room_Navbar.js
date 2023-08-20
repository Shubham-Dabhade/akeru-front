import React from 'react';
import "./room_navbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const Room_Navbar = ({handleMember,handleChat}) => {
  return (
    <>
              <div id="nav">
        <div className="nav--list">
          <button id="members__button" onClick={()=>{handleMember()}}>
            <MenuOutlinedIcon />
          </button>
          <a href="/">
            <h3 id="logo">
              <img
                src={require("../../../assets/navbar/icons8-microsoft-stream-2019-96.png")}
                alt="Site Logo"
                className="SiteLogo"
              />
              <span>AKERU</span>
            </h3>
          </a>
        </div>

        <div id="nav__links">
          <button id="chat__button" onClick={()=>{handleChat()}}>
            <QuestionAnswerOutlinedIcon className="chatIcon_room" />
          </button>
          <a className="nav__link" id="create__room__btn" href="/createroom">
            <div className="create-room-room-text">Create Room</div>
            <div className="create-room-icon-container">
              <AddCircleOutlineOutlinedIcon className="createroom-room-icon" />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Room_Navbar