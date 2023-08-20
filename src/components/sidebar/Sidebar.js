import React, { useEffect, useRef, useState } from 'react'
import "./sidebar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faCommentDots, faFire, faGear, faHouse, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'

const Sidebar = ({click}) => {
  const [active,setActive] = useState(1);
  const side = useRef();


  const handleActive=(value)=>{
    switch(value){
      case 1:
        setActive(1);
        break;
      case 2:
        setActive(2);
        break;
      case 3:
        setActive(3);
        break;
      case 4:
        setActive(4);
        break;
      case 5:
        setActive(5);
        break;
      case 6:
        setActive(6);
        break;
      case 7:
        setActive(7);
        break;
      case 8:
        setActive(8);
        break;
      default:
        console.log("Looking forward to the Weekend");
    }
  }

  return (
    <div  ref={side} className={`Sidebar ${click ? "open" :"" }`}>
        <div className="top-sidebar">
          <ul className='sidebar-list'>
            <li className={`sidebar-list-item ${active===1?"sidebar-list-item-active":""}`} onClick={()=>{handleActive(1)}}>
              <a href="#" className='sidebar-link'>
                <FontAwesomeIcon className='sidebar-icon' icon={faHouse} size='lg' />
                <div className='sidebar-link-text'>Home</div>
              </a>
            </li>
            <li className={`sidebar-list-item ${active===2?"sidebar-list-item-active":""}`} onClick={()=>{handleActive(2)}}>
              <a href="/createroom" className='sidebar-link'>
                <FontAwesomeIcon className='sidebar-icon' icon={faSquarePlus} size='lg' />
                
                <div className='sidebar-link-text'>Create</div>
              </a>
            </li>
            <li className={`sidebar-list-item ${active===3?"sidebar-list-item-active":""}`} onClick={()=>{handleActive(3)}}>
              <a href="#" className='sidebar-link'>
              <FontAwesomeIcon className='sidebar-icon' icon={faFire} size="lg" />
                <div className='sidebar-link-text'>Trending</div>
              </a>
            </li>
            <li className={`sidebar-list-item change-message ${active===4?"sidebar-list-item-active":""}`} onClick={()=>{handleActive(4)}}>
              <a href="#" className='sidebar-link'>
              <FontAwesomeIcon className='sidebar-icon' icon={faCommentDots} size="lg" />
                <div className='sidebar-link-text'>Message</div>
              </a>
            </li>
            <li className={`sidebar-list-item change-bell ${active===5?"sidebar-list-item-active":""}`} onClick={()=>{handleActive(5)}}>
              <a href="#" className='sidebar-link'>
              <FontAwesomeIcon className='sidebar-icon' icon={faBell} size='lg'/>
                <div className='sidebar-link-text'>Notification</div>
              </a>
            </li>
            <li className={`sidebar-list-item ${active===6?"sidebar-list-item-active":""}`} onClick={()=>{handleActive(6)}}>
              <a href="#" className='sidebar-link'>
              <FontAwesomeIcon className='sidebar-icon' icon={faQuestion} size="lg" />
                <div className='sidebar-link-text'>Help</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-sidebar">
        <ul className='sidebar-list'>
            <li className={`sidebar-list-item ${active===7?"sidebar-list-item-active":""}`} onClick={()=>{handleActive(7)}}>
              <a href="#" className='sidebar-link'>
              <FontAwesomeIcon className='sidebar-icon' icon={faGear} size="lg" />
                <div className='sidebar-link-text'>Settings</div>
              </a>
            </li>
            <li className={`sidebar-list-item ${active===8?"sidebar-list-item-active":""}`} onClick={()=>{handleActive(8)}}>
              <a href="#" className='sidebar-link'>
              <FontAwesomeIcon className='sidebar-icon' icon={faArrowRightFromBracket} size="lg" />
                <div className='sidebar-link-text'>Log out</div>
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar