import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Instructors from "./Instructors";
import Media from "./Media";
import Events from "./Events";
import MyEvents from "./MyEvents";
import Contact from "./Contact";
import Login from "./Login";
import "./App.css";

function App() {

const [currentUser, setCurrentUser] = useState("");

useEffect(() => {
  fetch("/me").then((response) => {
    if (response.ok) {
      response.json().then((data) => setCurrentUser(data));
    }
  });
}, []);

function handleLogOut() {
  fetch("/logout", { method: "DELETE" }).then((response) => {
    if (response.ok) {
      setCurrentUser(false);
    }
  });
}
  return (
    //play with a class of container for bootstrap layout
    <div className="App">
      <Nav currentUser={currentUser}/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="instructors" element={<Instructors currentUser={currentUser}/>} />
        <Route path="media" element={<Media />} />
        <Route path="events" element={<Events currentUser={currentUser}/>} />
        <Route path="myevents" element={<MyEvents currentUser={currentUser} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogOut={handleLogOut}/>} />
      </Routes>
    </div>
  );
}

export default App;
