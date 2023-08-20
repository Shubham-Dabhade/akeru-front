import React, { useState } from 'react'
import "./home.css"

import UpperContainer from "../../components/home/upper-container/UpperContainer.js"
import BottomContainer from "../../components/home/bottom-container/BottomContainer.js"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'


const Home = ({handleSide,click}) => {
  const [selectedTag,setSelectedTag] = useState("all");

  const handleTag=(tag)=>{
    setSelectedTag(tag)
  }

  return (
    <>
    <Navbar handleSide = {handleSide}/>
    <div id='home'>
        <Sidebar click = {click} />
        <div id="home-block">
          <UpperContainer handleTag={handleTag}/>
          <BottomContainer tag={selectedTag}/>
        </div>
    </div>
    </>
  )
}

export default Home