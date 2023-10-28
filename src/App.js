
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Education from "./components/Education";
import SocialLink from "./components/SocialLink";
import Project from "./components/Project";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="Skill" element={<Skill />} />
            <Route path="Education" element={<Education />} />
            <Route path="Project" element={<Project />} />
            <Route path="SocialLink" element={<SocialLink />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
