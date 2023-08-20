import React from 'react';
import "./streamContainer2.css"

const StreamContainer2 = ({data}) => {
  return (
    <div className="stream-content1" key={data.id}>
        <div className="stream-image-container1">
            <div className="stream-live-sign1">
            LIVE
            </div>
            <img className='stream-image1' src={data.content["content-thumbnail"]} alt="" />
        </div>
        <div className="stream-thumbnail1">
            {data.content["content-title"]}
        </div>
        <div className="streamer-user1">
            <div className="user-thumb-image-contain1">
            <img className='user-thumb-image1' src={data.content['content-user-img']} alt="" />
            </div>
            <div className="streamer-user-tag1">
            {data.content["content-user-name-tag"]}
            </div>
        </div>
    </div>
  )
}

export default StreamContainer2;