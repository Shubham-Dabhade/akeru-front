import React, { useEffect, useRef } from 'react';
import "./room_chat.css";

const Room_Chat = ({chatActive}) => {
    const messagesContainer = useRef();

    useEffect(() => {
      setTimeout(() => {
        messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight;
      }, 100);
    }, [messagesContainer,chatActive]);
    

  return (
    <div className={`room-chat-container ${chatActive?'open-chat':""} `}>
        <div className="inside-room-chat-container">
            <div className="messages-container" ref={messagesContainer}>
                <div className="message-wrapper">
                    <div className="message-body-bot">
                        <strong className="message-author-bot">🤖 Akeru Bot</strong>
                        <p className="message-text-bot">Welcome to the room, Don't be shy, say hello!</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    <div className="message-body-bot">
                        <strong className="message-author-bot">🤖 Akeru Bot</strong>
                        <p className="message-text-bot">Dennis Ivy just entered the room!</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    <div className="message-body">
                        <strong className="message-author">Dennis Ivy</strong>
                        <p className="message-text">Does anyone know hen he will be back?</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    <div className="message-body-bot">
                        <strong className="message-author-bot">🤖 Akeru Bot</strong>
                        <p className="message-text-bot">Sulamita  just entered the room!</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    <div className="message-body-bot">
                        <strong className="message-author-bot">🤖 Akeru Bot</strong>
                        <p className="message-text-bot">Shahriar P. Shuvo  just entered the room!</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    
                    <div className="message-body">
                        <strong className="message-author">Sulamita</strong>  
                        <p className="message-text"> Great stream!</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    
                    <div className="message-body">
                        <strong className="message-author">Dennis Ivy</strong>  
                        <p className="message-text"> Convert RGB color 
                            codes to HEX HTML format for use 
                            in web design and CSS.</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    
                    <div className="message-body">
                        <strong className="message-author">Shahriar P. Shuvo 👋</strong>  
                        <p className="message-text">Does 
                            anyone know hen he will be 
                            back?</p>
                    </div>
                </div>
                <div className="message-wrapper">
                        
                    <div className="message-body">
                        <strong className="message-author">Sulamita</strong> 
                        <p className="message-text">Great stream!</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    
                    <div className="message-body">
                        <strong className="message-author">Dennis Ivy</strong>   
                        <p className="message-text">Convert RGB color 
                            codes to HEX HTML format for use 
                            in web design and CSS.</p>
                    </div>
                </div>

                <div className="message-wrapper">        
                    <div className="message-body">
                        <strong className="message-author">Shahriar P. Shuvo 👋</strong>
                        <p className="message-text">Does 
                            anyone know hen he will be 
                            back?</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    <div className="message-body">
                        <strong className="message-author">Sulamita</strong>
                        <p className="message-text">Great stream!</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    <div className="message-body-bot">
                        <strong className="message-author-bot">🤖 Akeru Bot</strong>
                        <p className="message-text-bot">👋 Sulamita  has left the room</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    
                    <div className="message-body">
                        <strong className="message-author">Dennis Ivy</strong>
                        <p className="message-text">Convert RGB color 
                            codes to HEX HTML format for use 
                            in web design and CSS.</p>
                    </div>
                </div>

                <div className="message-wrapper">
                    <div className="message-body">
                        <strong className="message-author">Shahriar P. Shuvo 👋</strong>
                        <p className="message-text">Does 
                            anyone know hen he will be 
                            back?</p>
                    </div>
                </div>
            </div>
            <form className="message-form">
                <input type="text" name="message" placeholder="Send a message...." autoComplete='off' />   
            </form>
        </div>
    </div>
  )
}

export default Room_Chat