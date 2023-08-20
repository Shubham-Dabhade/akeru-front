import React from "react";
import "./room_participants.css";

const Room_Participants = ({memberActive}) => {
  return (
    <div className={`room-participants-container ${memberActive?"show-member":""}`}>
      <div className="members-container">
        <div className="members-header">
          <p>Participants</p>
          <strong className="members-count">27</strong>
        </div>
        <div className="members-list">
          <div className="member-wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Sulammita</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Shahriar P. Shuvo 👋:</p>
          </div>

          <div className="member-wrapper" id="member__1__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Sulammita</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Shahriar P. Shuvo 👋:</p>
          </div>

          <div className="member-wrapper" id="member__1__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Sulammita</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Shahriar P. Shuvo 👋:</p>
          </div>

          <div className="member-wrapper" id="member__1__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Sulammita</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>
          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Shahriar P. Shuvo 👋:</p>
          </div>

          <div className="member-wrapper" id="member__1__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Sulammita</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Shahriar P. Shuvo 👋:</p>
          </div>

          <div className="member-wrapper" id="member__1__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Sulammita</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Shahriar P. Shuvo 👋:</p>
          </div>

          <div className="member-wrapper" id="member__1__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Sulammita</p>
          </div>

          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>
          <div className="member-wrapper" id="member__2__wrapper">
            <span className="green-icon"></span>
            <p className="member-name">Dennis Ivy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room_Participants;
