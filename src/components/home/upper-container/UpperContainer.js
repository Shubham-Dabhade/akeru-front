import React, { useRef, useState } from 'react';
import "./upper_container.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const UpperContainer = ({handleTag}) => {
  const innerTags = useRef();
  const [activeTag,setActiveTag] = useState(0); 

  const tags = ["All","Politics", "Education","Trending", "Religion", "Economics", "Sports", "Media", "Law"];

  const handleTags=(index)=>{
    switch(index){
      case 0:
        setActiveTag(0);
        handleTag("all");
        break;
      case 1:
        setActiveTag(1);
        handleTag("politics");
        break;
      case 2:
        setActiveTag(2);
        handleTag("education");
        break;
      case 3:
        setActiveTag(3);
        handleTag("trending");
        break;
      case 4:
        setActiveTag(4);
        handleTag("religion");
        break;
      case 5:
        setActiveTag(5);
        handleTag("economics");
        break;
      case 6:
        setActiveTag(6);
        handleTag("sports");
        break;
      case 7:
        setActiveTag(7);
        handleTag("media");
        break;
      case 8:
        setActiveTag(8);
        handleTag("law");
        break;
      default:
        console.log("Looking forward to the Weekend");
    }
  }


  return (
    <div className='UpperContainer'>
      <div className="upper-content">
        <div className="right-container">
          <div className="right-title">
          Fuel Your Mind: Stream, Debate, and Connect on our Premier Platform!
          </div>
          <div className="right-subtitle">
          Here Opinions Collide and Ideas Thrive: Join the Livestream Debates and Engaging Discussions
          </div>
        </div>
        <div className="left-container">
          <div className="video-container">
            <video className='left-video' loop autoPlay controls>
              <source src={require("../../../assets/home/video1.mp4")} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
      <div className="upper-content1">
          <div className="inner-upper-content1" ref={innerTags}>
          <div className="inner-arrow left-arrow">

          </div>
              {tags.map((tag,index)=>{
                  return(
                    <div className={`tags ${activeTag===index? "active-tag":""}`} key={index} onClick={()=>{handleTags(index,activeTag)}}>
                      {tag}
                    </div>
                  )
                })
              }
          </div>
          <div className="inner-arrow right-arrow"></div>
      </div>
    </div>
  )
}

export default UpperContainer