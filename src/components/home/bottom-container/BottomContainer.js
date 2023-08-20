import React from 'react';
import "./bottom_container.css"

import DemoData from '../../../demo-data.js';
import StreamContainer1 from '../stream-container-1/StreamContainer1';
import StreamContainer2 from '../stream-container-2/StreamContainer2';



const BottomContainer = ({tag}) => {

  const tags = ["trending","politics", "education","religion", "economics", "sports", "media", "law"]


  return (
    <div className='BottomContainer'>
    {
      tag==="all"?
        tags.map((tag,index)=>{
          return(<div className="bottom-content" key={index}>
            <div className="stream-container">
                <div className="top-stream-container">
                  <div className="stream-tag-title">
                    {tag.charAt(0).toUpperCase()+tag.slice(1)}
                  </div>
                  <div className="view-all-stream">
                    View all
                  </div>
                </div>
                <div className="bottom-stream-container">
                  <div className="bottom-stream-in-container">
                    {DemoData.map((data)=>{
                      return(data.tags.includes(tag) &&
                            <StreamContainer1 data={data}/>
                      )
                    })}
                  </div>
                </div>
            </div>
          </div>
          )
      })
      :
      <div className="bottom-content-1">
        {DemoData.map((data)=>{
          return(data.tags.includes(tag) && 
            <StreamContainer2 data={data}/>
          )
        })}
      </div>
    }
    </div>
  )
}

export default BottomContainer