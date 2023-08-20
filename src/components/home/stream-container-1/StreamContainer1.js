import React from 'react'
import "./streamContainer1.css";

const StreamContainer1 = ({data}) => {
  return (
    <div className="stream-content" key={data.id}>
        <div className="stream-image-container">
            <div className="stream-live-sign">
            LIVE
            </div>
            <img className='stream-image' src={data.content["content-thumbnail"]} alt="" />
        </div>
        <div className="stream-thumbnail">
            {data.content["content-title"]}
        </div>
        <div className="streamer-user">
            <div className="user-thumb-image-contain">
            <img className='user-thumb-image' src={data.content['content-user-img']} alt="" />
            </div>
            <div className="streamer-user-tag">
            {data.content["content-user-name-tag"]}
            </div>
        </div>
    </div>
  )
}

export default StreamContainer1;