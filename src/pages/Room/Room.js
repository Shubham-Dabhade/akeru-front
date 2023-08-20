import React, { useState } from "react";
import "./room.css";
import Room_Navbar from "../../components/room/room-nav/Room_Navbar";
import Room_Participants from "../../components/room/room-participants/Room_Participants";
import Room_Chat from "../../components/room/room_chat/Room_Chat";
import Room_Video from "../../components/room/room_video/Room_Video";


const Room = () => {
  const [memberContainer,setMemberContainer]= useState(false);
  const [chatContainer,setChatContainer]= useState(false);

  const handleMember=()=>{
    if(chatContainer){
      setChatContainer(!chatContainer);
    }
    setMemberContainer(!memberContainer);
  }

  const handleChat=()=>{
    if(memberContainer){
      setMemberContainer(!memberContainer);
    }
    setChatContainer(!chatContainer);
  }


  return (
    <>
      <div className="room-container">
        <Room_Navbar handleMember={handleMember} handleChat={handleChat}/>
        <div className="room-bottom-container">
          <Room_Participants memberActive={memberContainer}/>
          <Room_Video/>
          <Room_Chat chatActive={chatContainer}/>
        </div>
      </div>
    </>
  );
};

export default Room;
