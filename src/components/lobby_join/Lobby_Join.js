import React from 'react';
import "./lobby_join.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Lobby_Join = () => {
  return (
    <div id="room-lobby-container">
        <div className="lobby-top-buttons-container">
            <div className="return-home-button-container responsive-home-button">
                <a href="/">
                    <div className="return-home-button ">
                        <ArrowBackIcon style={{marginRight:"7px"}}/>
                        Home
                    </div>
                </a>
                <div className="return-home-button-shadow">
                    e
                </div>
            </div>
            <div className="alternate-return-home-button-container responsive-alternate-home">
                <a href="/">
                    <div className="alernate-return-home-button">
                        <HomeOutlinedIcon />
                    </div>
                </a>
                <div className="alternate-return-home-button-shadow">
                    e
                </div>
            </div>
            <div className="create-room-button-container">
                <a href="/createroom">
                    <div className="create-room-button">
                        <AddCircleOutlineIcon style={{marginRight:"7px"}}/>
                        Create Room
                    </div>
                </a>
                <div className="create-room-button-shadow">
                    e
                </div>
            </div>
        </div>
        <div className="lobby-form-container-contain">
        <img className='lobby-background' src={require("../../assets/lobby/background.jpeg")} alt="" />
            <div id="lobby-form-container">
                <div className="inside-lobby-form-container">

                    <div id="form-container-header">
                        <p>👋 Join Room</p>
                        <div className="dots-container">
                            <div className="form-container-header-dots1"></div>
                            <div className="form-container-header-dots2"></div>
                            <div className="form-container-header-dots3"></div>
                        </div>
                    </div>
        
        
                    <form id="lobby__form">
        
                        <div className="form__field__wrapper">
                            <label>Your Name</label>
                            <input type="text" name="name" required placeholder="Enter your display name..." />
                        </div>
        
                        <div className="form__field__wrapper">
                            <label>Room Name</label>
                            <input type="text" name="room" required placeholder="Enter room name..." />
                        </div>
                        
                        <div className="form__field__wrapper avatar-container">
                            <label>Select Avatar</label>
                            <div id="avatar__selection">
                                <img src={require("../../assets/lobby-join-avatar/1.png")} alt="" className="avatar__option" />
                                <img src={require("../../assets/lobby-join-avatar/2.PNG")} alt="" className="avatar__option" />
                                <img src={require("../../assets/lobby-join-avatar/3.PNG")} alt="" className="avatar__option" />
                                <img src={require("../../assets/lobby-join-avatar/4.PNG")} alt="" className="avatar__option" />
                                <img src={require("../../assets/lobby-join-avatar/5.png")} alt="" className="avatar__option" />
                                <img src={require("../../assets/lobby-join-avatar/6.png")} alt="" className="avatar__option" />                        </div>
                        </div>

                        <div className="form__field__wrapper">
                            <button type="submit">Go to Room 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="form-container-shadow-1">
                    e
                </div>
                <div className="form-container-shadow-2">
                    e
                </div>
            </div>
        </div>
     </div>
  )
}

export default Lobby_Join