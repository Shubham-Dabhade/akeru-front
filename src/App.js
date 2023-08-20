import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import Lobby_Join from "./components/lobby_join/Lobby_Join";
import Lobby_Create from "./components/lobby_create/Lobby_Create";
import Room from "./pages/Room/Room";

function App() {
  const [click, setClick] = useState(false);

  const handleSideToggle = (stat) => {
    setClick((prev) => {
      return !prev;
    });
  };

  return (
    <Router>
      <div className="App">
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Home handleSide={handleSideToggle} click={click} />}
            />
            <Route path="/createroom" element={<Lobby_Create />} />
            <Route path="/joinroom" element={<Lobby_Join />} />
            <Route path="/room" element={<Room />} />
            {/* <Route path="/solutions" element={<Solutions/>} />
        <Route path="/ouredge" element={<OurEdge/>} />
        <Route path="/ourbrands" element={<OurBrands/>} />
        <Route path="/contactus" element={<ContactUs/>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
